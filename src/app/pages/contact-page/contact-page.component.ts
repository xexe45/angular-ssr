import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactPageComponent {

}
