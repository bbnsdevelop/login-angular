import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginFormPassComponent } from './modal-login-form-pass.component';

describe('ModalLoginFormPassComponent', () => {
  let component: ModalLoginFormPassComponent;
  let fixture: ComponentFixture<ModalLoginFormPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoginFormPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLoginFormPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
