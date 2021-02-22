import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterosComponent } from './reporteros.component';

describe('ReporterosComponent', () => {
  let component: ReporterosComponent;
  let fixture: ComponentFixture<ReporterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporterosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
