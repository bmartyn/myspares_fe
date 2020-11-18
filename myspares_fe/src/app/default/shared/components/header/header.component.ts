import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spares-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // dowload link for mobile app
  downloadApp() {
    window.open(
      'https://play.google.com/store/apps/details?id=com.manibarathtk.sampleApp'
    );
  }
}
