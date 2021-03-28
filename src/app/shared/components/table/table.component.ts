import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PostService } from '../../../components/posts/post.service';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'identificador', 'rolAsociado', 'estado', 'telefono', 'correo', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  objetoTemp: any;


  constructor(private servicioFireBase: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.servicioFireBase
      .obtenerUsuarios()
      .subscribe(posts => {
        console.log(this.dataSource.data = posts)
      });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  crearUusarios() {
    this.servicioFireBase.guardarFireBase(this.objetoTemp);
  }

  eliminarUsuario(item: any) {
    console.log(item)
    this.servicioFireBase.eliminarUsuario(item.idFireBase);
  }

  onNewPost() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);
  }

}
