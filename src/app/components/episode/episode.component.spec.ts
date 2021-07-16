import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RickymortyServiceService } from 'src/app/servicios/rickymorty-service.service';

import { EpisodeComponent } from './episode.component';

describe('EpisodeComponent', () => {
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /*
  const listadoDepuracion = fixture.debugElement.nativeElement.querySelectorAll('li');

    // primer prueba:
    // examina que "listado depuracion " osea los items que contiene la lista generada
    // que acabamos de seleccionar en la linea anterior, tenga el mismo numero de elementos 
    //que el array que definimos al inicio del test , en este ejemplo el array inicial tiene 4 items
    // y la lista que ve el usuario deberia tener ese mismo numero 
    expect(listadoDepuracion.length).toBe(component.lista.length);
  */
})
