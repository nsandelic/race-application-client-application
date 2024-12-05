import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyRaceComponent } from './apply-race.component';

describe('ApplyRaceComponent', () => {
  let component: ApplyRaceComponent;
  let fixture: ComponentFixture<ApplyRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyRaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
