import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/interfaces/book.interface';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  booksSubscription!: Subscription;
  books:IBook[]=[];
  isLoading:boolean=false;

  constructor(private dashboardService:DashboardService, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {}

  fetchBooks(){
    this.isLoading=true;
    this.dashboardService.getBooks().subscribe((res:any)=>{
      this.books=res;
      this.isLoading=false;
    },err=>{
      this.isLoading=false;
    })
  }

  onLogout(){
    this.authService.clearStorage();
    this.router.navigateByUrl("");
  }

  ngOnDestroy() {
    if(this.booksSubscription){
      this.booksSubscription.unsubscribe();
    }
  }

}
