import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agentur } from '../models/agentur';

@Injectable({
  providedIn: 'root'
})
export class AgenturService {
private path: string;
constructor(private httpClient:HttpClient) { 
this.path="https://localhost:7231/api/";
}

getAgentur():Observable<Agentur>{
    return this.httpClient.get<Agentur>(this.path+"Agentur");
}

}
