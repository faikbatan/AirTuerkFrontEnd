import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlugStraeckenComponent } from './FlugStraecken/FlugStraecken.component';
import { NavComponent } from './nav/nav.component';
import { AgenturComponent } from './agentur/agentur.component';
import { VorgaengeComponent } from './vorgaenge/vorgaenge.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlugStraeckenComponent,
    NavComponent,
    AgenturComponent,
    VorgaengeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
