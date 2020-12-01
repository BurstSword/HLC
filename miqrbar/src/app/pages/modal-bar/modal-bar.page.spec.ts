import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBarPage } from './modal-bar.page';

describe('ModalBarPage', () => {
  let component: ModalBarPage;
  let fixture: ComponentFixture<ModalBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
