import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenmainComponent } from './imagenmain.component';

describe('ImagenmainComponent', () => {
  let component: ImagenmainComponent;
  let fixture: ComponentFixture<ImagenmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
