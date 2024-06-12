import { Component } from '@angular/core';
import { WorksComponent } from '../../public/works/works.component';

@Component({
  selector: 'app-recent-works',
  standalone: true,
  imports: [WorksComponent],
  templateUrl: './recent-works.component.html',
  styleUrl: './recent-works.component.scss'
})
export class RecentWorksComponent {
  isCarousel = true;
}
