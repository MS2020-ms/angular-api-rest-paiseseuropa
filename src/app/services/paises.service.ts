import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://restcountries.eu/rest/v2/region/europe'
  }

  //metodo .get me devuelve un Observable -> MG transformar en Promesa con metodo .toPromise, ahora me devuelve una Promesa. La retorno para que se consuma fuera donde vaya a recuperar informacion. Devuelve un array de objetos [{},{},{}...]
  getPaises(): Promise<any[]> {
    return this.http.get<any[]>(this.url).toPromise();
  }
}
