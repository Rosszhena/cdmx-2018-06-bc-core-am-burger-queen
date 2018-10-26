import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor( 
    public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  resetPassword(email: string) {
     this.authService.resetPassword(email);
     this.router.navigate(['/'])
   }
}
