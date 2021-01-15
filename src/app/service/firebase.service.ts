import { Arac, Uye } from './../models/model/model.module';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbArac = '/Araclar';
  private dbUye = '/Uyeler';
  aracRef: AngularFireList<Arac> = null;
  uyeRef: AngularFireList<Uye> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.aracRef = db.list(this.dbArac);
    this.uyeRef = db.list(this.dbUye);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  UyeSil(key: string) {
    return this.uyeRef.remove(key);
  }
  UyeListele() {
    return this.uyeRef;
  }
  KayitListele() {
    return this.aracRef;
  }
  KayitListeleByUID(uid: string) {
    return this.db.list("/Araclar", q => q.orderByChild("uid").equalTo(uid));
  }
  KayitByKey(key: string) {
    return this.db.object("/Araclar/" + key);
  }
  KayitEkle(kayit: Arac) {
    return this.aracRef.push(kayit);
  }
  KayitDuzenle(kayit: Arac) {
    return this.aracRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.aracRef.remove(key);
  }
}
