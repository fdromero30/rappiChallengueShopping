import { Component, OnInit } from '@angular/core';
import { ItemCompra } from 'src/app/models/itemCompra.model';
import { DataService } from '../../providers/data-provider';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public listaItemsCarrito: ItemCompra[];
  public productos: any;
  public Total: number = 0.00;
  public precioDesde:any;
  public precioHasta:any;
  public disponible:boolean;
  public cantidad:any;

  constructor(public service: DataService) {
    this.listaItemsCarrito = JSON.parse(localStorage.getItem('carrito'));
    if(this.listaItemsCarrito==null){
      this.listaItemsCarrito=[];
    }else{
      this.calcularTotal();
    }
    this.productos = [];
  }

  ngOnInit() {
    this.getListaProductos();
  }
  getListaProductos() {

    this.service.getProductsJson().subscribe((data: any) => {
      let products = data.products;

      products.forEach(element => {

        element.CantidadCompra = 1;
        let temp: any = element;
        this.productos.push(temp);
      });

      console.log("listaItems", this.productos);

    })

  }

  anadirItem(item: ItemCompra, cantidad) {

    var temp = item.price.replace("$", "").replace(",", "");
    var price = parseFloat(temp);
    item.PrecioTotal = price*cantidad;

    this.listaItemsCarrito.push(item);

    this.calcularTotal();
  }
  onKey(event: any, item) {

    console.log(item.price);
    var temp = item.price.replace("$", "").replace(",", "");
    var price = parseFloat(temp);

    var priceItemFinal = price * parseInt(event.target.value);

    var fin = this.numberWithComma(priceItemFinal);
    item.price = fin.toString();
    console.log(item.price, price);
  }

  numberWithComma(priceItemFinal) {
    return priceItemFinal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  eliminarItem(item: any) {

    if (this.listaItemsCarrito.length > 0) {
      this.listaItemsCarrito.forEach(element => {

        if (element.id == item.id) {

          var x = this.listaItemsCarrito.indexOf(element);
          this.listaItemsCarrito.splice(x,1);
        }

      });
    }

    this.calcularTotal();
  }
  calcularTotal(){

    this.Total=0;
    this.listaItemsCarrito.forEach(element => {
      var priceTemp = element.PrecioTotal;
      this.Total = this.Total + priceTemp;
    });

    localStorage.setItem("carrito", JSON.stringify(this.listaItemsCarrito)); 
  }
  finalizarCompra(){
   this.listaItemsCarrito=[];
   this.Total=0.00;
    localStorage.setItem("carrito", null); 
  }

  cleanFiltros(){
  
  }
}
