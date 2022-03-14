import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, OnDestroy {
  data!: any[];
  dataSubscription!: Subscription;
  itemValue!:  string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.getData().subscribe(data => {
      this.data = data
    })
  }

  addItem() {
    this.dataService.addItem(this.itemValue)
    this.itemValue = ''
  }

  removeItem(item: any) {
    this.dataService.removeItem(item)
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
  }

}
