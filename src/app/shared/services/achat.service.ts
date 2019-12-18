import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Config} from '../config';
import { Achat } from '../models/achat';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Injectable({
  providedIn: 'root'
})
export class AchatService{
    constructor(private httpClient: HttpClient){}

    acheter(produit_id:number ,quantite: number ,token) {
      return this.httpClient.post<Achat>(Config.baseUrl + "/commande",{
       
            'produit_id': produit_id,
            'quantite': quantite,
            'token': token
          });
}
}