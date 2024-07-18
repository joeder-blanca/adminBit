import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComandasComponent } from './lista-comandas.component';

describe('ListaComandasComponent', () => {
  let component: ListaComandasComponent;
  let fixture: ComponentFixture<ListaComandasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaComandasComponent]
    });
    fixture = TestBed.createComponent(ListaComandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
