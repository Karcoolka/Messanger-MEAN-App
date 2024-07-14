import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostCreateComponent} from "./post/post-create/post-create.component";
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostCreateComponent, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}