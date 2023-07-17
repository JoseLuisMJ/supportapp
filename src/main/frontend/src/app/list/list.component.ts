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
    this.http.get<any[]>('http://localhost:8888/Request')
      .subscribe(data => {
        this.apiData = this.formatDateInApiData(data);
      });
  }

  formatDateInApiData(data: any[]): any[] {
    return data.map(item => {
      const date = new Date(item.date);
      const formattedDate = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      item.date = formattedDate;
      return item;
    });
  }
}
