import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationComponent,
    FooterComponent,
    NewsletterComponent
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    NewsletterComponent
  ]
})
export class SharedModule { }
