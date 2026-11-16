import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Kailangan para sa ngModel (input field)

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skill-detail.html',
  styleUrls: ['./skill-detail.css']
})
export class SkillDetailComponent {
  // 1. INPUT: Tumatanggap ng data mula sa parent component
  @Input() selectedSkill: string = '';

  // 2. OUTPUT: Nagpapadala ng event o updated data pabalik sa parent
  @Output() skillUpdated = new EventEmitter<string>();

  // Temporary variable para sa input field
  updatedText: string = '';

  // Function kapag pinindot ang update button
  onSave() {
    this.skillUpdated.emit(this.updatedText); // Ipinapasa pabalik ang bagong value
    this.updatedText = ''; // I-clear ang input
  }
}
