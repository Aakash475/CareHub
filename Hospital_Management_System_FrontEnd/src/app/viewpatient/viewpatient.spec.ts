import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpatient } from './viewpatient';

describe('Viewpatient', () => {
  let component: Viewpatient;
  let fixture: ComponentFixture<Viewpatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewpatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewpatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
