import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCaixaComponent } from './painel-caixa.component';

describe('PainelCaixaComponent', () => {
  let component: PainelCaixaComponent;
  let fixture: ComponentFixture<PainelCaixaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelCaixaComponent]
    });
    fixture = TestBed.createComponent(PainelCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
