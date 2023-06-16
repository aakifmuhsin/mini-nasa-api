import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
@Component({
  selector: 'app-recentupdates',
  templateUrl: './recentupdates.component.html',
  styleUrls: ['./recentupdates.component.css']
})
export class RecentupdatesComponent {
  apodData: any;

  constructor(private nasaApiService: NasaService) { }

  ngOnInit() {
    this.getAPOD();
  }
  // This method calls the NasaService's getAPOD() function to fetch the Astronomy Picture of the Day (APOD) data.
  // It subscribes to the observable returned by getAPOD() and assigns the received data to the apodData property of this component.
  // This allows the template to access and display the fetched data.
  getAPOD() {
    this.nasaApiService.getAPOD().subscribe((data: any) => {
      this.apodData = data;
    });
  }
}
