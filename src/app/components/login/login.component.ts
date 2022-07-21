import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public userName:string='';
  public password:string='';

  constructor(private authService:AuthService, private router:Router) { }
  authSubscription!: Subscription;

  ngOnInit(): void {}

  onSubmit(){
    const payload={
      "identifier": this.userName,
      "password": this.password
    }
    this.authService.authenticate(payload).subscribe((res:any)=>{
      this.authService.saveToken(res.jwt);
      this.router.navigateByUrl("dashboard")
    },err=>{
      alert("Username or password is incorrect");
    })
  }

  ngOnDestroy() {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

}
