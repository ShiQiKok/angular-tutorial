import { Component } from '@angular/core';

// component decoration
@Component({
  selector: 'app-root',                 // the tag name
  templateUrl: './app.component.html',  // the template file (html)
  styleUrls: ['./app.component.css']    // the style file (css)
})
export class AppComponent {
  // properties
  title: string = 'Task Tracker';

  // methods can be placed here
}
