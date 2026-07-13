import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Faltaba esta línea
import { RouterOutlet, RouterModule } from '@angular/router'; // Junté estos dos para más orden

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'ProyectoBase';
}