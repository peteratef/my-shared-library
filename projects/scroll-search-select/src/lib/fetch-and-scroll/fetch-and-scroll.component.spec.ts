import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAndScrollComponent } from './fetch-and-scroll.component';

describe('FetchAndScrollComponent', () => {
  let component: FetchAndScrollComponent;
  let fixture: ComponentFixture<FetchAndScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchAndScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchAndScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
