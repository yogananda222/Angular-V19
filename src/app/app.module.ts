import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModules
import { HomeComponent } from './pages/home/home.component';  // Import HomeComponent

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Ensure HttpClientModule is imported
    HomeComponent,      // Import HomeComponent here (no need to declare it)
  ],
  providers: [],
  bootstrap: [],  // Bootstrap AppComponent here
})
export class AppModule { }
