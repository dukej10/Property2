import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userSevice: UserService, private router: Router) { }

  ngOnInit(): void {   /* cuando den click en Logout*/
    this.logoutUser();  
  }

  logoutUser(): void{
    this.userSevice.logoutUser();
    this.router.navigate(["/dir"]);

    
  }

}
