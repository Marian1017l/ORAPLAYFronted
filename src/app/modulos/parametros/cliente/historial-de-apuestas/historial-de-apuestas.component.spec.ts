import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDeApuestasComponent } from './historial-de-apuestas.component';

describe('HistorialDeApuestasComponent', () => {
  let component: HistorialDeApuestasComponent;
  let fixture: ComponentFixture<HistorialDeApuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialDeApuestasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialDeApuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
