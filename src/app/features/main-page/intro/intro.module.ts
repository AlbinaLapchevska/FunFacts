import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IntroComponent],
  exports: [IntroComponent],
})
export class IntroModule {}
