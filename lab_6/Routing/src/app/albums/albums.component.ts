// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-albums',
//   templateUrl: './albums.component.html',
//   styleUrls: ['./albums.component.css']
// })
// export class AlbumsComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = []; // Assuming you have albums array populated with the provided data

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Fetch albums data or populate albums array here
  }

  deleteAlbum(albumId: number): void {
    // Implement delete functionality here
    // Example: Filter out the album with the given ID
    this.albums = this.albums.filter(album => album.id !== albumId);
  }
}
