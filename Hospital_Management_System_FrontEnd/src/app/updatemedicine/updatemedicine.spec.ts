import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatemedicine } from './updatemedicine';

describe('Updatemedicine', () => {
  let component: Updatemedicine;
  let fixture: ComponentFixture<Updatemedicine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatemedicine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatemedicine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
