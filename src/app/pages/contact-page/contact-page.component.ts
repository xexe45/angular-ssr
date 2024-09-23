import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
   this.title.setTitle('Contact Page');
   this.meta.updateTag({
    name: 'description', content: 'Este es mi contact Page'
   });
   this.meta.updateTag({
    name: 'og:title', content: 'Contact Page'
   });
   this.meta.updateTag({
    name: 'keywords', content: 'Cesar, Lachira, contact, Angular'
   });
  }
}
