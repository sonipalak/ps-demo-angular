import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  people: any[] = [];
  searchPeople: string = '';


  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.fetchPeopleData();
  }

  fetchPeopleData(): void {
    const apiUrl = 'https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.people = data.results;
    });
  }

  

}
