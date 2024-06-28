import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoFinanceiroComponent } from './novo-financeiro.component';

describe('NovoFinanceiroComponent', () => {
  let component: NovoFinanceiroComponent;
  let fixture: ComponentFixture<NovoFinanceiroComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoFinanceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
