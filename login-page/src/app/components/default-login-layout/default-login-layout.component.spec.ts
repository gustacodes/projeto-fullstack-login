import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginLayoutComponent } from './default-login-layout.component';

describe('DefaultLoginLayoutComponent', () => {
  let component: DefaultLoginLayoutComponent;
  let fixture: ComponentFixture<DefaultLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLoginLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
