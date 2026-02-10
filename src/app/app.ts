import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { UserTable } from './user-table/user-table';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, Navbar, UserTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Shoko');


}
