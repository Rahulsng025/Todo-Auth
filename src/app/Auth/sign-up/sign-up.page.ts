import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { UtilsService } from 'src/app/Service/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public passwordType: string = 'password';
  public passwordIcon: string = 'eye-off';
  termsChecked: boolean = false;
  email!: string;
  password!: string
  displayName!: string



  constructor(public authService: AuthenticationService,
    private router: Router,
    private utils: UtilsService) { }

  ngOnInit() {
  }

  // signUp(userEmail: any, userPwd: any) {
  //   if( userEmail.value == '' || userPwd.value == '') {
  //     this.utils.showToaster('All fields are mandatory',);
  //   } 
  //   else {
  //     this.authService.SignUp(this.displayName, userEmail.value, userPwd.value);
  //   }
  // }

  signUp() {
      this.authService.SignUp(this.displayName, this.email, this.password);
    
  }

  redirect(ev: any, url: string) {
    this.router.navigateByUrl(url, { replaceUrl: true });
   
  }

  
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }


}
