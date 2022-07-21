import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books:IBook[]=[];
  @Input() isLoading:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  trackBooks(index:number,item:IBook){
    return item.id;
  }

}
