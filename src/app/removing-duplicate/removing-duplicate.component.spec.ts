import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingDuplicateComponent } from './removing-duplicate.component';

describe('RemovingDuplicateComponent', () => {
  let component: RemovingDuplicateComponent;
  let fixture: ComponentFixture<RemovingDuplicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovingDuplicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovingDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
