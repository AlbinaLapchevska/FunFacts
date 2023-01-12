import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { VideoModule } from './video/video.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, VideoModule, NavbarModule],
})
export class HeaderModule {}
