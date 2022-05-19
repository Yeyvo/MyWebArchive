import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Utilisateurs } from '../utilisateurs';
import {UtilisateurService} from '../utilisateurs.service';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {UTIISATEURS} from "../mock-utilisateurs";
import {SelectionModel} from "@angular/cdk/collections";
@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.scss']
})
export class UtilisateursListComponent implements OnInit {

  utilisateurs$!: Observable<Utilisateurs[]>;
  selectedId = 0;
  users :Utilisateurs[];

  newVersionDisplay : boolean = false;

  onOpenAddVersion() {
    this.newVersionDisplay = true
  }
  constructor(
    private UtilisateurService: UtilisateurService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.utilisateurs$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.UtilisateurService.getUtilisateurs();
      })
    );
  }
  displayedColumns: string[] =['select','id','name','status','details'];
  dataSource = new MatTableDataSource(UTIISATEURS);
  selection = new SelectionModel<Utilisateurs>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Utilisateurs): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  /** get all users from server */
  getUsers(): void {
    this.UtilisateurService.getAllUtilisateurs()
    .subscribe(users => this.users = users);
  }
  /**import data from server */
  /**export data from server */
  /**Delete user from server */
}
