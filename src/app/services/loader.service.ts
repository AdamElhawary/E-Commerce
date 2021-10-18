import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoadingBehaviour = new BehaviorSubject(false);

  constructor() {}

  getIsLoading() {
    return this.isLoadingBehaviour;
  }

  setIsLoading(newValue: any) {
    this.isLoadingBehaviour.next(newValue);
  }
}
