import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FactsService } from '../../../api/facts.service';

@Component({
  selector: 'app-article-text',
  templateUrl: './article-text.component.html',
  styleUrls: ['./article-text.component.css'],
})
export class ArticleTextComponent {
  @Input()
  public fact =null;

}
