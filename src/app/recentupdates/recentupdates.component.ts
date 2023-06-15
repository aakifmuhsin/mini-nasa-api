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

  getAPOD() {
    this.nasaApiService.getAPOD().subscribe((data: any) => {
      this.apodData = data;
    });
  }
}
