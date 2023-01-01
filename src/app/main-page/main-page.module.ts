import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ArticleModule } from './article/article.module';
import { IntroModule } from './intro/intro.module';

@NgModule({
  imports: [CommonModule, ArticleModule,IntroModule],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {}
