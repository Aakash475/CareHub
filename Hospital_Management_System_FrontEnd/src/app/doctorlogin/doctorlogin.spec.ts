import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctorlogin } from './doctorlogin';

describe('Doctorlogin', () => {
  let component: Doctorlogin;
  let fixture: ComponentFixture<Doctorlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Doctorlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctorlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
