import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arac } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-aracekle',
  templateUrl: './aracekle.component.html',
  styleUrls: ['./aracekle.component.css']
})
export class AracekleComponent implements OnInit {
  secArac: Arac = new Arac();
  constructor(
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  Kaydet() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.secArac.uid = user.uid;
    this.fbServis.KayitEkle(this.secArac).then(d => {
      this.router.navigate(['/']);
    });
  }

}
