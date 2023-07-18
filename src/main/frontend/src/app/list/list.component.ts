import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  apiData: any[] = []; // Creamos un array vacio para que lo rellene como un bollicao
  tableColumns: string[] = ['id', 'subject', 'description', 'user', 'date'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // LLamamos a la api
    this.http.get<any[]>('http://localhost:8000/Request')
      .subscribe(data => {
        this.apiData = data;
      });
  }
}
