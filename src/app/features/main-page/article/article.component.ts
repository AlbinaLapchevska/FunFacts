import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {firstValueFrom} from "rxjs";
import {FactsService} from "../../../core/api/facts.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    private factsService: FactsService,
    private changeDetectorRef: ChangeDetectorRef
  )
  {
  }

  ngOnInit() {
    this.fetchFact();
  }

  public fact = "";
  async fetchFact() {
    this.fact= await firstValueFrom(this.factsService.getFact());
    this.changeDetectorRef.detectChanges();
    console.log(this.fact);
  }

}
