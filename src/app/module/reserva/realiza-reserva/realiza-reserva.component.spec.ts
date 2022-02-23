import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizaReservaComponent } from './realiza-reserva.component';

describe('RealizaReservaComponent', () => {
  let component: RealizaReservaComponent;
  let fixture: ComponentFixture<RealizaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizaReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
