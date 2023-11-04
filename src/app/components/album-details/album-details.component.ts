import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../interface/album';
import { Photo } from '../../interface/photo';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
})
export class AlbumDetailsComponent implements OnInit {
  albums: Album | any;
  photos: Photo[];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {}

  loadAlbumDetails(albumId: string) {
    this.albumService.getPhotosByAlbumId(albumId).subscribe((albums) => {
      this.albums = albums;
    });
  }

  loadALbumPhotos(albumId: string) {
    this.albumService.getPhotosByAlbumId(albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const albumId = params['id'];
      this.loadAlbumDetails(albumId);
      this.loadALbumPhotos(albumId);
    });
  }
}
