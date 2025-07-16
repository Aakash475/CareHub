import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicinelist } from './medicinelist';

describe('Medicinelist', () => {
  let component: Medicinelist;
  let fixture: ComponentFixture<Medicinelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Medicinelist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Medicinelist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
