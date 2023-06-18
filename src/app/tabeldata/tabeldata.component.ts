import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabeldata',
  templateUrl: './tabeldata.component.html',
  styleUrls: ['./tabeldata.component.scss']
})
export class TabeldataComponent {
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

}
