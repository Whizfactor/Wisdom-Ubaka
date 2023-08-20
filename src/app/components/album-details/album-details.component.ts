import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../interface/photo';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  albumId: number;
  photos: Photo[];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.loadAlbumDetails();
    });
  }

  loadAlbumDetails() {
    this.albumService.getPhotosByAlbumId(this.albumId).subscribe(photos => {
      this.photos = photos;
    });
  }
}
