import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent {
  formData: any = {
    id: null,
    date: null,
    description: '',
    subject: '',
    user: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const apiUrl = 'http://localhost:8888/Request';
    this.http.post(apiUrl, this.formData).subscribe(
      (response) => {
        console.log('Data saved successfully!', response);
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/list']);
  }

}
