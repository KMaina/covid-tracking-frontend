import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tracing } from '../tracing-class/tracing';
import { TracingRequestService } from '../tracing-http/tracing-request.service';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})
export class TracingComponent implements OnInit {
  newTracing: any = {
    user: null,
    name: null,
    contact: 0,
    date: new Date(),
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  ItemsArray!: any[];
  userContacts!: any[];
  user_id: any;
  username: string;


  // newTracing = new Tracing("", "", 0, new Date());
  @Output() addTracing = new EventEmitter<Tracing>();

  constructor(private tracingService: TracingRequestService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('username')
    this.user_id = localStorage.getItem('user_id')


    this.tracingService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
      this.userContacts = this.ItemsArray.filter(id => id.user == this.user_id);

    })
  }

  submitTrace(): void {
    this.user_id = localStorage.getItem('user_id')
    let { user, name, contact, date } = this.newTracing;
    this.tracingService.addData(user = this.user_id, name, contact, date).subscribe(
      data => {
        console.log(data);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;

      }
    );
  }

}
