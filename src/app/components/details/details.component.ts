import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from 'src/app/models/housingLocation.model';
import { HousingService } from 'src/app/services/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  
    this.housingService.getHousingLocationById(housingLocationId)
    .then(housingLocation => {
      this.housingLocation = housingLocation;
  });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
