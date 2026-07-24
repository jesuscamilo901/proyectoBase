import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  isModalOpen: boolean = false;
  selectedImage: string = '';
  selectedTitle: string = ''; // NUEVO
  selectedDesc: string = '';  // NUEVO

  // Actualizamos la función para recibir 3 parámetros
  openModal(imageUrl: string, title: string, desc: string) {
    this.selectedImage = imageUrl;
    this.selectedTitle = title;
    this.selectedDesc = desc;
    this.isModalOpen = true;
  }

  // Limpiamos las variables al cerrar
  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = '';
    this.selectedTitle = '';
    this.selectedDesc = '';
  }
}
