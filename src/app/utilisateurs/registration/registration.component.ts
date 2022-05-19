import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Utilisateurs } from '../utilisateurs';
import {UtilisateurService} from '../utilisateurs.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {

  angForm: FormGroup;
  isVisible: any;
  isSelected: boolean = true;

  constructor(private fb: FormBuilder,private http: HttpClient,private UtilisateurService: UtilisateurService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      nomcomplet: ['', Validators.required ],
      email: ['', Validators.required ],
      statut: ['', Validators.required ],
      promotion: ['',  ]
    });
  }
  submitForm() {
    var formData: any = new FormData();
    // 3 attributs à envoyer : email, statut, promotion
    //formData.append("nomcomplet", this.angForm.get('nomcomplet').value);
    formData.append("email", this.angForm.get('email').value);
    if(this.angForm.get('statut').value==1){
      formData.append("statut","Professeur");
    }
    else {
      formData.append("statut", "Etudiant");
    }
    
    formData.append("promotion", this.angForm.get('promotion').value);
    for (var value of formData.values()) {
      console.log(value);
   }
    this.http.post('url', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.angForm.reset();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.UtilisateurService.addUtilisateur({ name } as Utilisateurs)
      .subscribe(tablesutilisateurs => {
        //this.tableUtilisateurs.push(hero);
      });
  }
}
