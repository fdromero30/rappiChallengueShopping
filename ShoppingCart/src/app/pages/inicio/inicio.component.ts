import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public estadoMenu:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  accionMenu(){

    if(this.estadoMenu)
    this.estadoMenu=false;
    else
    this.estadoMenu=true;
  }
}
