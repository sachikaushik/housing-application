import { Component, Input } from '@angular/core';
import { HousingLocation } from 'src/app/models/housingLocation.model';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}