import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any[] = []
  dataSub = new Subject<any[]>()

  constructor() { }

  addItem(item: any) {
    this.data.push(item)
    this.dataSub.next(this.data)
  }

  getData() {
    return this.dataSub.asObservable()
  }

  removeItem(item: any) {
    this.data = this.data.filter(el => el != item)
    this.dataSub.next(this.data)
  }

}
