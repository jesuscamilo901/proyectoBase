import { Routes } from '@angular/router';
import { Menu } from '../menu/menu';
import { Contacto } from '../contacto/contacto';

export const routes: Routes = [
  // Cuando la ruta esté vacía (al dar clic al logo), no cargará nada en el outlet
  { path: '', children: [] }, 
  
  // Rutas de tus pantallas
  { path: 'menu', component: Menu },
  { path: 'contacto', component: Contacto }
];
