import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../components/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private route: Router, private spinner: NgxSpinnerService) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {

  }

  onLogin(form: UserI) {

    this.spinner.show();

    this.authSvc
      .loginByEmail(form)
      .then(res => {
        this.spinner.hide();
        this.route.navigate(['/home']);
      })
      .catch(err => console.log('Error', err));
  }
}