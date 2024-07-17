import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerAboutComponent } from './dinner-about.component';

describe('DinnerAboutComponent', () => {
  let component: DinnerAboutComponent;
  let fixture: ComponentFixture<DinnerAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinnerAboutComponent]
    });
    fixture = TestBed.createComponent(DinnerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
