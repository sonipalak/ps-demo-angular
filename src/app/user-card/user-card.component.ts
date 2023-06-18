import { Component } from '@angular/core';
import { ApiService } from '../_shared/api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
      }
    );
  }



  

}
