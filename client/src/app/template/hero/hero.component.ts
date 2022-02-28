import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private uService: UserService) { }

  userLogged: boolean = false;

  ngOnInit(): void {
    this.showButton();
  }

  showButton(): void{
    let userInfo = this.uService.getUserInformation();
    if(isNullOrUndefined(userInfo)){ 
      this.userLogged = false;  /* Si el usuario no está logueado */
    }else{ 
      this.userLogged = true;  /* Si el usuario está logueado */
    }

  }

}
