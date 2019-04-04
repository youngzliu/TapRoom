import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BrewmarketComponent } from './brewmarket/brewmarket.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'market',
    component: BrewmarketComponent
  },
  {
    path: 'market/:id',
    component: BrewDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
