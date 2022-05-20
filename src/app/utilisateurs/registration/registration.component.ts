import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Utilisateurs } from '../utilisateurs';
import { UtilisateurService } from '../utilisateurs.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  angForm: FormGroup;
  isVisible: any;
  isSelected: boolean = true;
  user: Utilisateurs;

  constructor(private fb: FormBuilder, private http: HttpClient, private UtilisateurService: UtilisateurService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      nomcomplet: ['', Validators.required],
      email: ['', Validators.required],
      statut: ['', Validators.required],
      promotion: ['',],
      matricule: ['',]
    });
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  submitForm() {
    var formData: any = new FormData();
    formData.append("imageUrl",null);
    formData.append("displayName", this.angForm.get('nomcomplet').value);
    formData.append("email", this.angForm.get('email').value);
    if (this.angForm.get('statut').value == 1) {
      formData.append("type", "Professeur");
    }
    else {
      formData.append("type", "Etudiant");
    }
    formData.append("mle", this.angForm.get('matricule').value);
    formData.append("niveauetudes", this.angForm.get('promotion').value);
    for (var value of formData.values()) {
      console.log(value);
    }
    //status à traiter par la suite
    this.http.post('http://localhost:3000/api/users/adduser',
    { displayName:this.angForm.get('nomcomplet').value ,
    imageUrl:null,
    mle:this.angForm.get('matricule').value,
    niveauetudes:this.angForm.get('promotion').value,
    type:this.angForm.get('statut').value,
    email:this.angForm.get('email').value
   }
    
    ,this.httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.angForm.reset();
  }
}
