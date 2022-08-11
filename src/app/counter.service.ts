import { Injectable } from '@angular/core';

@Injectable()
export class CounterService{

  clickToInactive : number  = 0;
  clickToActive : number = 0;

  countActiveToInactive(){
    this.clickToInactive++;
    console.log("Inactive Count " +this.clickToInactive);
  }

  countInactiveToActive(){
    this.clickToActive++;
    console.log("Active Count " +this.clickToActive);
  }

}
