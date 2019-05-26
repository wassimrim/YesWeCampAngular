import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  onSubmit() {
   // alert("cc");
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }

    this.loginService.login(loginPayload).subscribe(data => {
  //   console.log(data);
 //    console.log(data.authorities[0]["authority"]);
      //localStorage.setItem('token', JSON.stringify({"ss":"zee" }));
      if(data.accessToken != undefined ) {
      //  localStorage.setItem('token', JSON.stringify({"ss":"zee" }));
       window.localStorage.setItem('Token', data.accessToken);
       window.localStorage.setItem('idUser', data.id);
       window.localStorage.setItem('role',data.authorities[0]["authority"]);
        this.router.navigate(['home']);
       // $( "#navbar-main" ).show();
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  onRegister(){
    this.router.navigate(["register"]);
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });

  }

}
