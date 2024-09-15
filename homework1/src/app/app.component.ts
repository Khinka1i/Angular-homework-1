import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // <-- Mark the component as standalone
  imports: [RouterOutlet]
})
export class AppComponent {
  message = 'String interpolation is useful';
  counter = 0;
  intervalId: any;

  constructor() {
    // Assigning value to the message variable
    this.message = 'String interpolation is useful';

    // Initializing the counter to 0
    this.counter = 0;

    // Set up a timer that increments the counter every second
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);

    // Set up a second timer to stop the counter after 20 seconds
    setTimeout(() => {
      clearInterval(this.intervalId);
    }, 20000);
  }
}
