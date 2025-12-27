import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // 👈 add this to enable <router-outlet>
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {}
