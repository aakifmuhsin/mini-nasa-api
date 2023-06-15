import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { HttpClient } from '@angular/common/http';

interface Asteroid {
  links: {
    self: string;
  };
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    miles: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    feet: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: {
      kilometers_per_second: string;
      kilometers_per_hour: string;
      miles_per_hour: string;
    };
    miss_distance: {
      astronomical: string;
      lunar: string;
      kilometers: string;
      miles: string;
    };
    orbiting_body: string;
  }[];
  is_sentry_object: boolean;
}

interface NearEarthObjects {
  [date: string]: Asteroid[];
}

@Component({
  selector: 'app-astroids',
  templateUrl: './astroids.component.html',
  styleUrls: ['./astroids.component.css']
})
export class AstroidsComponent {
  startDate: string = '';
  endDate: string = '';
  asteroids: Asteroid[] = [];
  neoData: any;

  constructor(private nasaApiService: NasaService ,private http: HttpClient) {}
  // ngOnInit() {
  //   this.fetchData();
  // }
  searchAsteroids(): void {
    // Construct the API URL based on the selected start and end dates
    const apiUrl = `http://api.nasa.gov/neo/rest/v1/feed?start_date=${this.startDate}&end_date=${this.endDate}&detailed=false&api_key=BScd9FU3GpZvnoQhtJLXXSlBe99cJKhSc6EejY8R`;

    // Make an HTTP GET request to the API
    this.http.get(apiUrl)
      .subscribe((response: any) => {
        // On successful response, extract the asteroid data
        const nearEarthObjects: NearEarthObjects = response.near_earth_objects;
        const asteroidDates: string[] = Object.keys(nearEarthObjects); // Get the dates of the asteroids
        this.asteroids = []; // Clear the existing asteroids data array

        // Iterate over each date and its corresponding asteroids
        asteroidDates.forEach((date: string) => {
          const asteroids: Asteroid[] = nearEarthObjects[date];

          // Iterate over each asteroid and add it to the asteroids array
          asteroids.forEach((asteroid: Asteroid) => {
            this.asteroids.push(asteroid);
          });
        });
      }, (error: any) => {
        console.log('Error:', error);
      });
  }

  fetchData(): void {
    this.nasaApiService.getNeoFeed(this.startDate, this.endDate)
      .subscribe(
        (response: any) => {
          this.neoData = response;
        },
        (error: any) => {
          console.error('Error fetching NEO data:', error);
        }
      );
  }
}
