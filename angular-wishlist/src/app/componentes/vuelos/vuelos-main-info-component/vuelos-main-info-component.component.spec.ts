import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosMainInfoComponentComponent } from './vuelos-main-info-component.component';

describe('VuelosMainInfoComponentComponent', () => {
  let component: VuelosMainInfoComponentComponent;
  let fixture: ComponentFixture<VuelosMainInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosMainInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosMainInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
