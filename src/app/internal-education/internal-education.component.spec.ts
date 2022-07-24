import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEducationComponent } from './internal-education.component';

describe('InternalEducationComponent', () => {
  let component: InternalEducationComponent;
  let fixture: ComponentFixture<InternalEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalEducationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InternalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
