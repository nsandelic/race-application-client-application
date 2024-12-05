import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRaceManagementComponent } from './admin-race-management.component';

describe('AdminRaceManagementComponent', () => {
  let component: AdminRaceManagementComponent;
  let fixture: ComponentFixture<AdminRaceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRaceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRaceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
