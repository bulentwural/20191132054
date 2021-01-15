import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { GirisComponent } from './components/giris/giris.component';
import { AraclarComponent } from './components/araclar/araclar.component';
import { AracekleComponent } from './components/aracekle/aracekle.component';
import { AracguncelleComponent } from './components/aracguncelle/aracguncelle.component';
import { AracdetayComponent } from './components/aracdetay/aracdetay.component';
import { UyelerComponent } from './components/uyeler/uyeler.component';
import { UyeduzenleComponent } from './components/uyeduzenle/uyeduzenle.component';
import { UyedetayComponent } from './components/uyedetay/uyedetay.component';
import { UstmenuComponent } from './components/ustmenu/ustmenu.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    UyeolComponent,
    GirisComponent,
    AraclarComponent,
    AracekleComponent,
    AracguncelleComponent,
    AracdetayComponent,
    UyelerComponent,
    UyeduzenleComponent,
    UyedetayComponent,
    UstmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
