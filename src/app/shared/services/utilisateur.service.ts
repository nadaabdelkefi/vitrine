import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Config} from '../config';
import { Utilisateur } from '../models/utilisateur';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService{
    constructor(private httpClient: HttpClient){}

    register(utilisateur:Utilisateur){
        return this.httpClient.post<Utilisateur>(Config.baseUrl + "/utilisateur/register",utilisateur)
           
    }

    login(utilisateur:Utilisateur){
      return this.httpClient.post<Token>(Config.baseUrl + "/utilisateur/login",utilisateur)
    }
}
