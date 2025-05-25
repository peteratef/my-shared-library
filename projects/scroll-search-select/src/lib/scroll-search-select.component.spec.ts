import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSearchSelectComponent } from './scroll-search-select.component';

describe('ScrollSearchSelectComponent', () => {
  let component: ScrollSearchSelectComponent;
  let fixture: ComponentFixture<ScrollSearchSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollSearchSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSearchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
