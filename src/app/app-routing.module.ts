import { UyelerComponent } from './components/uyeler/uyeler.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { GirisComponent } from './components/giris/giris.component';
import { AracdetayComponent } from './components/aracdetay/aracdetay.component';
import { AraclarComponent } from './components/araclar/araclar.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AracekleComponent } from './components/aracekle/aracekle.component';
import { AracguncelleComponent } from './components/aracguncelle/aracguncelle.component';

const redirectLogin = () => redirectUnauthorizedTo(['']);
const routes: Routes = [
  {
    path: '',
    component: AnasayfaComponent
  }, {
    path: 'araclar',
    component: AraclarComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  }, {
    path: 'uyeler',
    component: UyelerComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'aracekle',
    component: AracekleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  { path: 'giris', component: GirisComponent },
  { path: 'uyeol', component: UyeolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
