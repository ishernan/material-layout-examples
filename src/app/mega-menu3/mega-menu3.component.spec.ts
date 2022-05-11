import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMenu3Component } from './mega-menu3.component';

describe('MegaMenu3Component', () => {
  let component: MegaMenu3Component;
  let fixture: ComponentFixture<MegaMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaMenu3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
