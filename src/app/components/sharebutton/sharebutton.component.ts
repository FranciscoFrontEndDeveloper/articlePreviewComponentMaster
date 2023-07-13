import { Component, Output, EventEmitter } from '@angular/core';
import { SwitchService } from '../../comunication/switch.service';

@Component({
  selector: 'app-sharebutton',
  templateUrl: './sharebutton.component.html',
  styleUrls: ['./sharebutton.component.sass'],
})
export class SharebuttonComponent {
  @Output('triggerShare') triggerShare = new EventEmitter();
  changeFooter: boolean;

  constructor(private switchService: SwitchService) {
    this.changeFooter = true;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.switchService.stateFooter.emit(this.changeFooter);
  }
  changeComponent() {
    this.changeFooter = !this.changeFooter;
    this.switchService.stateFooter.emit(this.changeFooter);
  }
}
