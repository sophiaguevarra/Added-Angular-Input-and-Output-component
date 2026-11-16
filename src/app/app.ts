
import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';
import { InputOutput } from './input-output/input-output';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer, InputOutput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Sophia Rain D. Guevarra';
  location = 'Mabalacat City, Pampanga';
  email = 'guevarras496@gmail.com';
  phone = '0992 254 8140';

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  submittedMessage = '';

  receiveMessage(name: string) {
    this.submittedMessage =
      `Hello, ${name}! Thank you for visiting my portfolio. Have a great day!`;
  }

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
