import { Component, OnInit } from '@angular/core';
import { Agentur } from '../models/agentur';
import { AgenturService } from '../services/agentur.service';

@Component({
  selector: 'app-agentur',
  templateUrl: './agentur.component.html',
  styleUrls: ['./agentur.component.css'],
  providers: [AgenturService],
})
export class AgenturComponent implements OnInit {
  constructor(private agenturService: AgenturService) {}
  agentur!: Agentur;
  ngOnInit() {
    this.agenturService.getAgentur().subscribe((data) => {
      this.agentur = data;
    });
  }
}
