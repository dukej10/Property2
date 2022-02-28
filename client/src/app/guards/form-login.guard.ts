import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { isNullOrUndefined } from 'util';

/* Cuando el usuario este logueado no muestre el formulario de login */

@Injectable({
  providedIn: 'root'
})
export class FormLoginGuard implements CanActivate {
  constructor(private uService:UserService, private router: Router){

  }

  canActivate(){
    if(!isNullOrUndefined(this.uService.getUserInformation())){  /* Si se cumple, es que se ha iniciado sesión */
      this.router.navigate(["/dir"]);
      return false;
    }else{
      return true;
    }
}
  
}
