import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createpatient } from './createpatient';

describe('Createpatient', () => {
  let component: Createpatient;
  let fixture: ComponentFixture<Createpatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Createpatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createpatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
