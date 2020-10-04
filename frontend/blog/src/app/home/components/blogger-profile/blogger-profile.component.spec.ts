import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerProfileComponent } from './blogger-profile.component';

describe('BloggerProfileComponent', () => {
  let component: BloggerProfileComponent;
  let fixture: ComponentFixture<BloggerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloggerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
