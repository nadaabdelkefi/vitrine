import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from 'src/app/shared/services/utilisateur.service'
import { Utilisateur } from 'src/app/shared/models/utilisateur';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  utilisateur=new Utilisateur();
  constructor(private utilisateurService: UtilisateurService ,private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.utilisateurService.register(this.utilisateur)
    .subscribe(
      (data)=>{
        window.alert("account created!!!\n try to login");
        this.router.navigate(['/login']);
        console.log(data);
      },
      (error)=> {

      }
    );
    console.log(this.utilisateur);
  }

}
