import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  usuarios: Observable<any>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios()

  }

  favorite(user: any){
    console.log('favorite',user);
    this.ionList.closeSlidingItems();
  }
  share(user: any){
    console.log('share',user);
    this.ionList.closeSlidingItems();
  }
  delete(user: any){
    console.log('delete',user.name);
    this.ionList.closeSlidingItems();
  }

}
