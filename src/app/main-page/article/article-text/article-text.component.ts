import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FactsService } from '../../../api/facts.service';

@Component({
  selector: 'app-article-text',
  templateUrl: './article-text.component.html',
  styleUrls: ['./article-text.component.css'],
})
export class ArticleTextComponent {
  public test =null;
  constructor(
    private factsService: FactsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.fetchFact();
  }

  async fetchFact() {
    this.test = await firstValueFrom(this.factsService.getFact());
    this.changeDetectorRef.detectChanges();
    console.log(this.test);
  }
}
