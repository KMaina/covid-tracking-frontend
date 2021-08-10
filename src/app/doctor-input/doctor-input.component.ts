import { Component, OnInit } from '@angular/core';
import {DoctorInput} from '../doctor-input-class/doctor-input';
import {DoctorInputService} from '../doctor-input-service/doctor-input.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-doctor-input',
  templateUrl: './doctor-input.component.html',
  styleUrls: ['./doctor-input.component.css']
})
export class DoctorInputComponent implements OnInit {
  ItemsArray!: any[];
  isComplete: any;
  status: any;
  

  // ItemsArray= [];
  constructor(private doctorInputService: DoctorInputService) { }
  ngOnInit() {
    this.doctorInputService.getData().subscribe((res: any[])=>{
      this.ItemsArray= res;
      console.log (this.ItemsArray)
    })  
  }


  addNewStatus(ItemsArray){
    let inputLength = this.ItemsArray.length;
    ItemsArray.id = inputLength+1;
    this.ItemsArray.push(ItemsArray);
    console.log (this.ItemsArray)
  }

  deleteRow(id){
        for(let i = 0; i < this.ItemsArray.length; ++i){
            if (this.ItemsArray[i].id === id) {
                this.ItemsArray.splice(i,1);
            }
        }
    }
}



