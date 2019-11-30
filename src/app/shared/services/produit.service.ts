import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Config} from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  constructor(private httpClient: HttpClient) {
  }

  getProduits() {
    return this.httpClient
      .get<any[]>(Config.baseUrl + '/produit');
    
  }
}
