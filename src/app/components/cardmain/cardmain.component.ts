import { Component } from '@angular/core';
import { SwitchService } from 'src/app/comunication/switch.service';

@Component({
  selector: 'app-cardmain',
  templateUrl: './cardmain.component.html',
  styleUrls: ['./cardmain.component.sass'],
})
export class CardmainComponent {
  avatarComponent!: boolean;
  // shareComponent: boolean;

  constructor(private switchService: SwitchService) {
    this.switchService.stateFooter.subscribe((data) => {
      this.avatarComponent = data;
    });
  }
  ngOnInit(): void {}
}
