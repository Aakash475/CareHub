import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctordash } from './doctordash';

describe('Doctordash', () => {
  let component: Doctordash;
  let fixture: ComponentFixture<Doctordash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Doctordash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctordash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
