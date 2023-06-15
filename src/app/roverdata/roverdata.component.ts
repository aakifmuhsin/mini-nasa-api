import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: Camera[];
}
@Component({
  selector: 'app-roverdata',
  templateUrl: './roverdata.component.html',
  styleUrls: ['./roverdata.component.css']
})
export class RoverdataComponent {
  rovers: Rover[] = []; // Array to store the rover data
  searchTerm: string = ''; // Input field value for search

  constructor(private http: HttpClient) {}

  searchRovers(): void {
    const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=BScd9FU3GpZvnoQhtJLXXSlBe99cJKhSc6EejY8R';

    this.http.get(apiUrl)
      .subscribe((response: any) => {
        this.rovers = response.rovers;
      }, (error: any) => {
        console.log('Error:', error);
      });
  }

  get filteredRovers(): Rover[] {
    if (!this.searchTerm.trim()) {
      return this.rovers;
    }
  
    const searchTermLower = this.searchTerm.toLowerCase();
    return this.rovers.filter(rover =>
      rover.name.toLowerCase().indexOf(searchTermLower) !== -1
    );
  }
}
