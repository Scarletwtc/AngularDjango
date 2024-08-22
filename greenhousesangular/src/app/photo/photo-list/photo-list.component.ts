import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  constructor( private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhoto().subscribe(data => {
      this.photos = data;
    })
  }

  updatePhoto(id:number, photo: Photo) {
    this.photoService.updatePhoto(id, photo).subscribe(response => {
      this.getPhotos();
    } )
  }

  deletePhoto(id:number): void {
    this.photoService.deletePhoto(id).subscribe(() => {
      this.getPhotos();
    })
  }

}
