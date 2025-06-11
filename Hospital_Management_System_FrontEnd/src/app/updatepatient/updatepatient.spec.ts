import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatepatient } from './updatepatient';

describe('Updatepatient', () => {
  let component: Updatepatient;
  let fixture: ComponentFixture<Updatepatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatepatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatepatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
