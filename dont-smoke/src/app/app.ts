import {Component} from '@angular/core';
import {InitialInformation} from './components/initial-information/initial-information';

@Component({
  selector: 'app-root',
  imports: [
    InitialInformation
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'dont-smoke';
}
