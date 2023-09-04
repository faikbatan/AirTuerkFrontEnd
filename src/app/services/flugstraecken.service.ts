import { Injectable } from '@angular/core';
import { FlugStraecken } from '../models/FlugStraecken';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FlugstraeckenService {
  private path: string;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.path = 'https://localhost:7231/api/';
  }
  getFlugStraecken(): Observable<FlugStraecken[]> {
    return this.httpClient.get<FlugStraecken[]>(this.path + 'FlugStraecken');
  }
  getFlugStraeckenByDirection(
    Von: string,
    Nach: string
  ): Observable<FlugStraecken> {
    return this.httpClient.get<FlugStraecken>(
      this.path + 'FlugStraecken/GetByDirection/?Von=' + Von + '&Nach=' + Nach
    );
  }
}
