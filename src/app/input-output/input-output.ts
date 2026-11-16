
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [],
  templateUrl: './input-output.html',
  styleUrl: './input-output.css'
})
export class InputOutput {
  @Input() heading = 'SAY HELLO!';

  @Output() messageSubmitted = new EventEmitter<string>();

  message = '';

  submitMessage() {
    if (this.message.trim()) {
      this.messageSubmitted.emit(this.message.trim());
      this.message = '';
    }
  }
}
