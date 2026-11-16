
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {

  selectedSkill = '';

  skills = [
    { name: 'HTML and CSS', icon: '</>' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Angular', icon: 'A' }
  ];

  tools = [
    { name: 'Visual Studio Code', level: 'Advanced' },
    { name: 'Git and GitHub', level: 'Intermediate' },
    { name: 'Node.js and npm', level: 'Intermediate' },
    { name: 'Angular CLI', level: 'Beginner' }
  ];

  selectSkill(skill: string) {
    this.selectedSkill = skill;
  }

}
