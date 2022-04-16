import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingDataComponent } from './grouping-data.component';

describe('GroupingDataComponent', () => {
  let component: GroupingDataComponent;
  let fixture: ComponentFixture<GroupingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
