import { Component, OnInit } from '@angular/core';
import { ItemCompra } from 'src/app/models/itemCompra.model';
import { DataService } from '../../providers/data-provider';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public listaItemsCarrito: ItemCompra[];
  public productos: any;
  public Total: number = 0.00;

  constructor(public service: DataService) {
    this.listaItemsCarrito = [];
    this.productos = [];
  }

  ngOnInit() {
    this.getListaProductos();
  }
  getListaProductos() {

    this.service.getProductsJson().subscribe((data: any) => {
      let products = data.products;

      products.forEach(element => {
        let temp: any = element;
        this.productos.push(temp);
      });

      console.log("listaItems", this.productos);

    })

  }

}
