import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPostComponent } from './footer-post.component';

describe('FooterPostComponent', () => {
  let component: FooterPostComponent;
  let fixture: ComponentFixture<FooterPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
