import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlugStraecken } from '../models/FlugStraecken';
import { FlugstraeckenService } from '../services/flugstraecken.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-FlugStraecken',
  templateUrl: './FlugStraecken.component.html',
  styleUrls: ['./FlugStraecken.component.css'],
  providers: [FlugstraeckenService],
})
export class FlugStraeckenComponent implements OnInit {
  constructor(
    private flugStraeckenservice: FlugstraeckenService,
    private formBuilder: FormBuilder
  ) {}
  searchForm!: FormGroup;
  flugstraeckens!: FlugStraecken[];
  flugstraecken: any = {};
  ngOnInit() {
    this.flugStraeckenservice.getFlugStraecken().subscribe((data) => {
      this.flugstraeckens = data;
    });
  }
  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      VonDatum: ['', Validators.required],
      NachDatum: ['', Validators.required],
    });
  }
  SearchFlugStraecken() {
    if (this.searchForm.valid) {
      const von = this.searchForm.get('VonDatum')?.value;
      const nach = this.searchForm.get('NachDatum')?.value;
      this.searchForm = Object.assign({}, this.searchForm.value);
      this.flugStraeckenservice.getFlugStraeckenByDirection(von, nach);
    }
  }
}
