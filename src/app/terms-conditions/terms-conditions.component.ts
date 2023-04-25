import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent {
terms = ['როდის იწყება და რა ფორმატით გაიმართება აქცია?', 'როგორ მივიღო აქციაში მონაწილეობა?','სხვადასხვა'];
}