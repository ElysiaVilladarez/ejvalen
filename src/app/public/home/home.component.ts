import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import * as data from '../../db/data.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data: any;

  constructor() {
    this.data = data.homepage
  }

  redirectToUrlNewTab(url: string) {
    window.open(url, '_blank');
  }
}
