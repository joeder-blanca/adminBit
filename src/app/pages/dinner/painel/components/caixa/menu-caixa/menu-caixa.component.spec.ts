import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCaixaComponent } from './menu-caixa.component';

describe('MenuCaixaComponent', () => {
  let component: MenuCaixaComponent;
  let fixture: ComponentFixture<MenuCaixaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCaixaComponent]
    });
    fixture = TestBed.createComponent(MenuCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
