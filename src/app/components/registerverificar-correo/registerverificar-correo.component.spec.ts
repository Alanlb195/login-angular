import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterverificarCorreoComponent } from './registerverificar-correo.component';

describe('RegisterverificarCorreoComponent', () => {
  let component: RegisterverificarCorreoComponent;
  let fixture: ComponentFixture<RegisterverificarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterverificarCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterverificarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
