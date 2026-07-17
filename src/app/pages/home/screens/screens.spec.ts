import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screens } from './screens';

describe('Screens', () => {
  let component: Screens;
  let fixture: ComponentFixture<Screens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Screens],
    }).compileComponents();

    fixture = TestBed.createComponent(Screens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
