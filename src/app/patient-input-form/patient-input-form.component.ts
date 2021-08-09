import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../classes/user';
import { PatientInputService } from '../patient-input.service';
import { Results } from '../results-class/results';
import { ResultsRequestService } from '../results-service/results.service';


@Component({
  selector: 'app-patient-input-form',
  templateUrl: './patient-input-form.component.html',
  styleUrls: ['./patient-input-form.component.css']
})
export class PatientInputFormComponent implements OnInit {


  newInput: any = {
    name: null,
    user: null,
    symptoms: null,
    location: null,
  };
  user_id: any;
  errorMessage: any;
  
  constructor(private patientService:PatientInputService) { }
  ngOnInit(): void {
  }
 

  submitInput(): void {
    this.user_id = localStorage.getItem('user_id')
    let { user, name, symptoms, location} = this.newInput;
    console.log(this.user_id)
    this.patientService.addPatient(user = this.user_id, name, symptoms, location).subscribe(
      data => {
        console.log(data);

      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}