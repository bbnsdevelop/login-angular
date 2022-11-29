import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginChangePassComponent } from './modal-login-change-pass.component';

describe('ModalLoginChangePassComponent', () => {
  let component: ModalLoginChangePassComponent;
  let fixture: ComponentFixture<ModalLoginChangePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoginChangePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLoginChangePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
