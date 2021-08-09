import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tracing } from '../tracing-class/tracing';
import { TracingRequestService } from '../tracing-http/tracing-request.service';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css'],
  providers: [TracingRequestService]
})
export class TracingComponent implements OnInit {
    form:any = {
        user: null,
        name : null,
        contact:null,
        date : null
    };
    username: string;
    selectedTracing;
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    ItemsArray!: any[];
    newTracing= new Tracing ("","",0,new Date());
    @Output()  addTracing =new EventEmitter<Tracing>();
  contactapi: any;
  tracing:any =[]
  
  
  constructor(private tracingService: TracingRequestService) { 
    this.selectedTracing = {id:-1,name:'',number:0,date:new Date(),};
  }
  ngOnInit(): void {
    
    this.username = localStorage.getItem('username')

    this.tracingService.getData().subscribe((res: any[])=>{
      this.ItemsArray= res;

    })  
  }

  submitTrace(): void {
    const {user, name, contact,date} = this.newTracing;
    this.tracingService.addData(user, name, contact, date).subscribe(
      data => {
        console.log(data);
      
      },
      err => {
       console.log("error");
      }
    );
  }
  updateTracing (): void{
  const {user, name, contact,date} = this.newTracing;
  
  this.tracingService.updateTracing(user, name, contact, date).subscribe(
    data => {
      this.selectedTracing.push(data);
      console.log(data);
    }, 
    error => {
      console.log(error);
    }
  );
}

deleteTracing(){
  this.tracingService.deleteTracing(this.tracing.id).subscribe(
    ()=> console.log('succeess'),
    (err)=> console.log(err)
  );
}
}