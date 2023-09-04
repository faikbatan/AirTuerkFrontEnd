import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vorgang } from '../models/vorgang';
import { VorgaengeService } from '../services/vorgaenge.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-vorgaenge',
  templateUrl: './vorgaenge.component.html',
  styleUrls: ['./vorgaenge.component.css'],
  providers: [VorgaengeService],
})
export class VorgaengeComponent implements OnInit {
  constructor(
    private vorgangservice: VorgaengeService,
    private formBuilder: FormBuilder
  ) {}
  searchForm!: FormGroup;
  vorgaenge!: Vorgang[];
  vorgang: any = {};
  ngOnInit() {
    this.createSearchForm();
  }
  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      VonDatum: ['', Validators.required],
      NachDatum: ['', Validators.required],
    });
  }
  SearchVorgang() {
    if (this.searchForm.valid) {
      const von = this.searchForm.get('VonDatum')?.value;
      const nach = this.searchForm.get('NachDatum')?.value;
      this.searchForm = Object.assign({}, this.searchForm.value);
      this.vorgangservice.getVorgangByDatum('12.01.2022', '20.01.2022');
    }
  }
}
