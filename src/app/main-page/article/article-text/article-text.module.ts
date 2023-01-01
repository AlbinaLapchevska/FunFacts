import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleTextComponent } from './article-text.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ArticleTextComponent],
  exports: [ArticleTextComponent],
})
export class ArticleTextModule {}
