import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingSubsetComponent } from './removing-subset.component';

describe('RemovingSubsetComponent', () => {
  let component: RemovingSubsetComponent;
  let fixture: ComponentFixture<RemovingSubsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovingSubsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovingSubsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
