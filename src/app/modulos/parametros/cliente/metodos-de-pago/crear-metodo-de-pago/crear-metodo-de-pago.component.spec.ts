import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMetodoDePagoComponent } from './crear-metodo-de-pago.component';

describe('CrearMetodoDePagoComponent', () => {
  let component: CrearMetodoDePagoComponent;
  let fixture: ComponentFixture<CrearMetodoDePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMetodoDePagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMetodoDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
