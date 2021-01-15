import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arac } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-araclar',
  templateUrl: './araclar.component.html',
  styleUrls: ['./araclar.component.css']
})
export class AraclarComponent implements OnInit {
  araclar: Arac[];
  constructor(
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.KayitListele();
  }

  KayitListele() {
    this.fbServis.KayitListele().snapshotChanges().subscribe(data => {
      this.araclar = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.araclar.push(y as Arac);
      });
    });
  }
  Sil(arac:Arac){
    this.fbServis.KayitSil(arac.key).then(d => {
      this.router.navigate(['/araclar']);
    });
  }
}
