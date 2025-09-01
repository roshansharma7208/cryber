import { Component } from '@angular/core';
import { RouterOutlet ,} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cryber';
  ngOnInit() {
  document.body.style.backgroundColor = '#05071cff';
  document.body.style.margin = '0'
}

}
