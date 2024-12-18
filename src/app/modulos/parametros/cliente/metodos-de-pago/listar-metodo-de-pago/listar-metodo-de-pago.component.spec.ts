import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMetodoDePagoComponent } from './listar-metodo-de-pago.component';

describe('ListarMetodoDePagoComponent', () => {
  let component: ListarMetodoDePagoComponent;
  let fixture: ComponentFixture<ListarMetodoDePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMetodoDePagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMetodoDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
