import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  statut: string;
  email: string;
}

/** Constants used to fill up our data base. */
const EMAILS: string[] = [
  'a@gmail.com',
  'b@gmail.com',
  'c@gmail.com',
  'd@gmail.com',
  'e@gmail.com',
  'f@gmail.com',
  'g@gmail.com',
  'h@gmail.com',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
const STATUTS: string[] = [
  'Etudiant',
  'Enseignant',
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'statut', 'email'];
  dataSource: MatTableDataSource<UserData>;

  clickedRows = new Set<UserData>();

  @ViewChild(MatTableDataSource) table: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addData() {

  }

  removeData() {

  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    //statut: Math.round(Math.random() * 100).toString(),
    statut: STATUTS[Math.round(Math.random() * (STATUTS.length - 1))],
    email: EMAILS[Math.round(Math.random() * (EMAILS.length - 1))],
  };
}
