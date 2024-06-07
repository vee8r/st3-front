import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service/auth/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'st3-front';

  constructor(public authService: AuthService) {
  }
}
