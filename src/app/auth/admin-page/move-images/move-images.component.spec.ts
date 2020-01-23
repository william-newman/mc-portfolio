import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveImagesComponent } from './move-images.component';

describe('MoveImagesComponent', () => {
  let component: MoveImagesComponent;
  let fixture: ComponentFixture<MoveImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
