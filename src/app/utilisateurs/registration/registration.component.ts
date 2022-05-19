import { HttpClient } from '@angular/common/http';
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
  submitForm() {
    var formData: any = new FormData();
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
    //url à mettre
    this.http.post('url', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.angForm.reset();
  }
}
