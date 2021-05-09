import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPagesComponent } from './principal-pages.component';

describe('PrincipalPagesComponent', () => {
  let component: PrincipalPagesComponent;
  let fixture: ComponentFixture<PrincipalPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
