import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur';
import { UtilisateurService } from '../../shared/services/utilisateur.service';
import {Token} from '../../shared/models/token';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  utilisateur=new Utilisateur();
  constructor(private utilisateurService: UtilisateurService , private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
    //login 
    this.utilisateurService.login(this.utilisateur)
      .subscribe(
        (data:Token)=>{
          console.log(data);
            localStorage.setItem('token',data.token);
          console.log(localStorage);
          this.router.navigate(['/'])
        },
        (err)=>{
          console.log(err);
        }
      )
  }
}
