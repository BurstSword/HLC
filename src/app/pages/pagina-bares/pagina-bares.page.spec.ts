import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaBaresPage } from './pagina-bares.page';

describe('PaginaBaresPage', () => {
  let component: PaginaBaresPage;
  let fixture: ComponentFixture<PaginaBaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaBaresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaBaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
