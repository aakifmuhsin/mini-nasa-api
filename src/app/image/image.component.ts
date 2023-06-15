import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
// import { Photo } from '../photo.model';
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
    images : any ;
    filteredPhotos: any[] = []; // Array to store filtered photos


    // photos: Photo[] = []; // Array to store all photos
    // filteredPhotos: Photo[] = []; // Array to store filtered photos

    constructor(private photoService: NasaService,private http : HttpClient) {}

  // searchByEarthDate() {
  //   this.photoService.getPhotosByEarthDate(this.searchValue).subscribe((response : any) => {
  //     this.photos = response.photos;
  //     // console.log(this.photos);
  //     this.filteredPhotos = this.photos.slice(0, this.pageSize); // Initialize filtered photos with the first page
  //     // console.log(this.filteredPhotos);
  //     this.pageIndex = 0; // Reset the current page index
  //     this.paginator.firstPage(); // Go to the first page
  //   });
  // }
  
  // // Update the handlePageChange function
  // handlePageChange(event: PageEvent) {
  //   const startIndex = event.pageIndex * event.pageSize;
  //   const endIndex = startIndex + event.pageSize;
  //   this.filteredPhotos = this.photos.slice(startIndex, endIndex);
  // }
searchByEarthDate() {
  this.photoService.getPhotosByEarthDate(this.searchValue).subscribe((response: any) => {
    this.photos = response.photos;
    const lowercaseSearchValue = this.searchValue.toLowerCase();
    this.filteredPhotos = this.photos.filter(photo => photo.camera.name.toLowerCase() === lowercaseSearchValue);
  });  
} 
}
