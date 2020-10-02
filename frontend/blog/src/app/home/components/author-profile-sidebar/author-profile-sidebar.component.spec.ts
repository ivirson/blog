import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProfileSidebarComponent } from './author-profile-sidebar.component';

describe('AuthorProfileSidebarComponent', () => {
  let component: AuthorProfileSidebarComponent;
  let fixture: ComponentFixture<AuthorProfileSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorProfileSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
