import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private collectionUsers: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.collectionUsers = afs.collection<any>('usuarios');
  }

  public obtenerUsuarios(): Observable<any> {
    return this.collectionUsers
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as any;
            const idFireBase = a.payload.doc.id;
            return { idFireBase, ...data };
          })
        )
      );
  }

  public guardarFireBase(post: any) {
    const postObj = {
      nombre: post.nombre,
      apellido: post.apellido,
      identificador: post.identificador,
      rolAsociado: post.rolAsociado,
      estado: post.estado,
      pass: post.pass,
      telefono: post.telefono,
      correo: post.correo,
    };

    //if (postObj.id) {
    //  return this.postsCollection.doc("cA7RxZgicoLt5ZpcKx04").update(postObj);
    //} else {
    return this.collectionUsers.add(postObj);
    //}

  }

  public eliminarUsuario(id: any) {
    return this.collectionUsers.doc(id).delete();
  }
}
