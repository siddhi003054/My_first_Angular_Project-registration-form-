import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration';  // <-- import it

@Component({
  selector: 'app-root',
  standalone: true,       // <-- standalone app root
  imports: [RouterOutlet,RegistrationComponent],  // <-- add your component here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
