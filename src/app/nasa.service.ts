import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey = 'BScd9FU3GpZvnoQhtJLXXSlBe99cJKhSc6EejY8R';
  private apiUrl = 'https://api.nasa.gov/';
  private apiUrl1 = 'https://api.nasa.gov/neo/rest/v1/feed';

  constructor(private http: HttpClient) { }

  // Retrieves Near Earth Object (NEO) feed data for a given date range
  getNeoFeed(startDate: string, endDate: string): Observable<any> {
    const url = `${this.apiUrl1}?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // Retrieves Astronomy Picture of the Day (APOD) data
  getAPOD() {
    const url = `${this.apiUrl}planetary/apod?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Retrieves photos taken by the Curiosity rover on Mars for a specific Earth date
  getPhotosByEarthDate(earthDate: string): Observable<Photo[]> {
    const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
    const sol = 1000;
    const apiKey = 'BScd9FU3GpZvnoQhtJLXXSlBe99cJKhSc6EejY8R';

    const url = `${apiUrl}?sol=${sol}&api_key=${apiKey}`;
    return this.http.get<Photo[]>(url);
  }
}
