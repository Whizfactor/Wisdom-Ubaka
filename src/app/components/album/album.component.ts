import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../interface/album'; 

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ongetAllAlbums(): void {
    this.albumService.getAllAlbums().subscribe(
      albums => this.albums = albums
    )
  }

  ngOnInit() {
    this.ongetAllAlbums()
  }

}