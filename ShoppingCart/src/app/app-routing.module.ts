import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'menu', component:MenuComponent},
  {path:'carrito',component:CarritoComponent},
  {path:'', redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
