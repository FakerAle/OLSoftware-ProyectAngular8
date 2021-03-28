import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule } from '@angular/forms';


import { environment } from '../environments/environment';
import { ModalComponent } from './shared/components/modal/modal.component';

/* Spinner ngx */
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    NgxSpinnerModule

  ],
  entryComponents: [ModalComponent],
  providers: [
    { provide: StorageBucket, useValue: 'gs://ngblog-98663.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }