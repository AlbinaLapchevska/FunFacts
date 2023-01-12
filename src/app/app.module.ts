import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { MainPageModule } from './features/main-page/main-page.module';
import { FactsService } from './core/api/facts.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './features/footer/footer.module';

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
