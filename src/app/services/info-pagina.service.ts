import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {InfoPagina} from '../interfaces/info-pagina_interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina={};

  cargada: boolean =false;

  equipo: any[]= [];

  constructor(private http: HttpClient) { 

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) =>{

        this.cargada=true;
        this.info=resp;
        // console.log(resp);

      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-portafolio-519d3-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) =>{

        this.equipo= resp;
        // console.log(resp);

      });
  }


}
