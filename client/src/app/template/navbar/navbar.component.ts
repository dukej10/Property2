import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private uService: UserService) { }

  userLogged: boolean = false;
  completeName: string ='';

  ngOnInit(){
    this.showMenu();
  }

  
  showMenu(): void{
    let userInfo = this.uService.getUserInformation();
    if(isNullOrUndefined(userInfo)){ 
      this.userLogged = false;  /* Si el usuario no está logueado */
    }else{ 
      this.userLogged = true;  /* Si el usuario está logueado */
      this.completeName = userInfo.realm;
    }

  }

}
