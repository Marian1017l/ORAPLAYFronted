import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarApuestaComponent } from './listar-apuesta.component';

describe('ListarApuestaComponent', () => {
  let component: ListarApuestaComponent;
  let fixture: ComponentFixture<ListarApuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarApuestaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarApuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
