import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  photos: any[] = []; // Array to store the photo data
  searchValue: string = '';
  images: any;
  filteredPhotos: any[] = []; // Array to store filtered photos

  constructor(private photoService: NasaService, private http: HttpClient) {}

  // Search photos by Earth date
  searchByEarthDate() {
    this.photoService.getPhotosByEarthDate(this.searchValue).subscribe((response: any) => {
      this.photos = response.photos;
      const lowercaseSearchValue = this.searchValue.toLowerCase();
      this.filteredPhotos = this.photos.filter(photo => photo.camera.name.toLowerCase() === lowercaseSearchValue);
    });  
  } 
}