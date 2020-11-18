import { Component } from '@angular/core';

@Component({
  selector: 'app-get-directions',
  templateUrl: './get-directions.component.html',
  styleUrls: ['./get-directions.component.scss']
})
export class GetDirectionsComponent {
  // google maps zoom level
  public zoom = 18;
  // initial center position for the map
  public lattitudeLocation = 18;
  public longitudeLocation = 78;

  constructor() {}
}
