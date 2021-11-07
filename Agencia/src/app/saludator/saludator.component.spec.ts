import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludatorComponent } from './saludator.component';

describe('SaludatorComponent', () => {
  let component: SaludatorComponent;
  let fixture: ComponentFixture<SaludatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
