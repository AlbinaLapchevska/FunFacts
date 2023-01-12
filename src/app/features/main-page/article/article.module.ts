import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleImageModule } from './article-image/article-image.module';
import { ArticleTextModule } from './article-text/article-text.module';
import {ButtonModule} from "./button/button.module";

@NgModule({
  imports: [CommonModule, ArticleImageModule, ArticleTextModule,ButtonModule],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
})
export class ArticleModule {}
