import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collapse = true;

  constructor(private authSvc: AuthService, private route: Router, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
  }

  fillerNavFirst = { name: "OLSoftware", icon: "circle" };

  fillerNav = [
    { name: "Programación", icon: "code", iconTwo: "arrow_drop_down" },
    { name: "Gestión de operaciones", icon: "format_list_bulleted", iconTwo: "arrow_drop_down" },
    { name: "Perfiles", icon: "grading", iconTwo: "arrow_drop_down" },
    { name: "Roles", icon: "group" },
    { name: "Usuario", icon: "assignment_ind" },
    { name: "Reportes", icon: "insert_drive_file", iconTwo: "arrow_drop_down" },
  ]

  toggleSidebar() {
    this.collapse = !this.collapse;
  }

  onLogout() {

    this.spinner.show();

    setTimeout(() => {
      this.authSvc.logout();
      this.route.navigate(['/login']);
      this.spinner.hide();
    }, 1000);
  }


}
