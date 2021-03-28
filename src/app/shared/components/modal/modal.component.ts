
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../../components/posts/post.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalComponent>, private servicioFireBase: PostService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public newPostForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    identificador: new FormControl('', Validators.required),
    rolAsociado: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
  });

  addNewPost(usuario: any) {
    console.log(usuario);
    if(usuario.identificador != undefined && usuario.identificador != null  && usuario.identificador != ""){
      this.servicioFireBase.guardarFireBase(usuario);
    }
  }

}
