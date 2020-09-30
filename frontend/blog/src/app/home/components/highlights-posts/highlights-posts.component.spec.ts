import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsPostsComponent } from './highlights-posts.component';

describe('HighlightsPostsComponent', () => {
  let component: HighlightsPostsComponent;
  let fixture: ComponentFixture<HighlightsPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightsPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
