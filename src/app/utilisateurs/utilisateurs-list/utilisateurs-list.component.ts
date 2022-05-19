import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import { Utilisateurs } from '../utilisateurs';
import { UtilisateurService } from '../utilisateurs.service';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { UTIISATEURS } from "../mock-utilisateurs";
import { SelectionModel } from "@angular/cdk/collections";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.scss']
})
export class UtilisateursListComponent implements OnInit {

  utilisateurs$!: Observable<Utilisateurs[]>;
  users: Utilisateurs[] = [];
  selectedId = 0;
  newVersionDisplay: boolean = false;
  displayedColumns: string[] = ['displayName', 'email', 'type', 'status', 'details'];
  dataSource = new MatTableDataSource(UTIISATEURS);
  selection = new SelectionModel<Utilisateurs>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(
    private UtilisateurService: UtilisateurService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getUtilisateurs();
    // this.utilisateurs$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = parseInt(params.get('id')!, 10);
    //     return this.UtilisateurService.getUtilisateurs();
    //   })
    // );
  }

  getUtilisateurs(): void {
    this.UtilisateurService.getAllUtilisateurs()
      .subscribe(utilisateurs => this.users = utilisateurs);
  }


  /** design */
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.email + 1}`;
  }
  onOpenAddVersion() {
    this.newVersionDisplay = true
  }

  /**export */
  fileName = 'ExcelSheet.xlsx';

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('tableName');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
  /** upload file */
  // OnClick of button Upload
  file: File = null; // Variable to store file
  onFileSelected(event:any) {
      if (event.target.files.length > 0) {
        this.file = event.target.files[0];
        console.log(this.file);
        this.onUpload();
      }
    } 
    // OnClick of button Upload
    onUpload() {
      console.log(this.file);
      this.UtilisateurService.upload(this.file).subscribe(
          (event: any) => {     }
      );
  }
}
