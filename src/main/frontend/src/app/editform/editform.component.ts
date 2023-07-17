import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class EditformComponent {
  formData: any = {
    id: null,
    date: null,
    description: '',
    subject: '',
    user: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const requestId = params['id'];
      this.http.get<any>(`http://localhost:8888/Request/${requestId}`)
        .subscribe(data => {
          const formattedDate = format(new Date(data.date), 'dd/MM/yyyy');
          data.date = formattedDate;
          this.formData = data;
        });
    });
  }

  onSubmit() {
    const apiUrl = `http://localhost:8888/Request/${this.formData.id}`;
    this.http.put(apiUrl, this.formData)
      .subscribe(
        () => {
          console.log('Data updated successfully!');
          this.router.navigate(['/list']);
        },
        (error) => {
          console.error('Error updating data:', error);
        }
      );
  }

  onCancel() {
    this.router.navigate(['/list']);
  }


}
