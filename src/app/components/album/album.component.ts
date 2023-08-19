import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../interface/album'; 
import { Photo } from '../interface/photo'; 

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
albums: Album[];

  constructor() { }

  ngOnInit() {
  }

}