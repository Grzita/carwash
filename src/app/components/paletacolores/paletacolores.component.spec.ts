import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletacoloresComponent } from './paletacolores.component';

describe('PaletacoloresComponent', () => {
  let component: PaletacoloresComponent;
  let fixture: ComponentFixture<PaletacoloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaletacoloresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaletacoloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
