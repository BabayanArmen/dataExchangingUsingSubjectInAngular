import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit, OnDestroy {
  data!: any[];
  dataSubscription!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.getData().subscribe(data => {
      this.data = data
    })
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
  }

}
