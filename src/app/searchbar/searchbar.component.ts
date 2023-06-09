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
  showNoResults = false;
  isLoading = true;

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.fetchPeopleData();
  }


  fetchPeopleData(): void {
    const apiUrl = 'https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.people = data.results;
      this.showNoResults = (this.people.length === 0);
      this.isLoading = false;
    });
  }

  // fetchPeopleData(): void {
  //   this.http.get('assets/json/people.json').subscribe((data: any) => {
  //     this.people = data.results;
  //     this.showNoResults = (this.people.length === 0);
  //     this.isLoading = false;
  //   });
  // }

  searchPeopleResults() {
    this.showNoResults = this.people.filter(
      (person) =>
        person.name.first.toLowerCase().includes(this.searchPeople.toLowerCase()) ||
        person.name.last.toLowerCase().includes(this.searchPeople.toLowerCase())
    ).length === 0;
  }

  

  

}

