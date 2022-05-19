import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilisateurService } from '../utilisateurs.service';
import { Utilisateurs } from '../utilisateurs';
@Component({
  selector: 'app-utilisateurs-detail',
  templateUrl: './utilisateurs-detail.component.html',
  styleUrls: ['./utilisateurs-detail.component.scss']
})
export class UtilisateursDetailComponent implements OnInit {

  utilisateur$!: Observable<Utilisateurs>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UtilisateurService
  ) {}


  ngOnInit() {
    this.utilisateur$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUtilisateur(params.get('email')!))
    );
  }



}
