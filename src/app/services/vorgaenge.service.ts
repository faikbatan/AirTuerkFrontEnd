import { Injectable } from '@angular/core';
import { FlugStraecken } from '../models/FlugStraecken';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Vorgang } from '../models/vorgang';

@Injectable({
  providedIn: 'root',
})
export class VorgaengeService {
  private path: string;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.path = 'https://localhost:7231/api/';
  }
  getVorgangByDatum(
    VonDatum: string,
    NachDatum: string
  ): Observable<Vorgang[]> {
    return this.httpClient.get<Vorgang[]>(
      this.path +
        'Vorgaenge/GetVorgaenge/?DatumVon=' +
        VonDatum +
        '&DatumBis=' +
        NachDatum
    );
  }
}
