import { Routes } from '@angular/router';
import { FlugStraeckenComponent } from './FlugStraecken/FlugStraecken.component';
import { AgenturComponent } from './agentur/agentur.component';
import { VorgaengeComponent } from './vorgaenge/vorgaenge.component';

export const appRoutes: Routes = [
  { path: 'Agentur', component: AgenturComponent },
  { path: 'FlugStraecken', component: FlugStraeckenComponent },
  { path: 'Vorgaenge', component: VorgaengeComponent },
  { path: '*', redirectTo: 'agentur', pathMatch: 'full' },
];
