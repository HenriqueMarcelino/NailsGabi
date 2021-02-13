import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlongamentoComponent } from './alongamento.component';

describe('AlongamentoComponent', () => {
  let component: AlongamentoComponent;
  let fixture: ComponentFixture<AlongamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlongamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlongamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
