import { Component } from '@angular/core';
import { Book } from '../../models/books';
import * as data from  '../../db/data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  greeting: string;
  aboutStatement: string
  reading: Book[] = [];
  favorites: Book[] = []

  constructor() {
    this.reading = data.reading;
    this.favorites = data.favoriteWorks;
    this.aboutStatement = data.aboutPage.aboutStatement;
    this.greeting = data.aboutPage.greeting;
  }
}
