import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/shared/models/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  utilisateur=new Utilisateur();
  constructor() { }

  ngOnInit() {
  }
  onLogin(){
    //login 
  }
}
