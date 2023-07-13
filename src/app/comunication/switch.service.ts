import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchService {
  @Output() stateFooter: EventEmitter<boolean> = new EventEmitter<boolean>();
  // stateShare: boolean
  constructor() {
    
  }
}
