import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainPageModule } from './main-page/main-page.module';
import { FactsService } from './api/facts.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './footer/footer.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModule,
    MainPageModule,
    HttpClientModule,
    FooterModule,
  ],
  declarations: [AppComponent],
  providers: [FactsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
