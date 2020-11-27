import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaQRPage } from './pagina-qr.page';

describe('PaginaQRPage', () => {
  let component: PaginaQRPage;
  let fixture: ComponentFixture<PaginaQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaQRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
