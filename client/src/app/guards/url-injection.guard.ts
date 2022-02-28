import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { isNullOrUndefined } from 'util';

/* para proteger de la injection por url*/

@Injectable({
  providedIn: 'root'
})
export class UrlInjectionGuard implements CanActivate {

  constructor(private uService: UserService, private router: Router){

  }

  canActivate(){
    if(isNullOrUndefined(this.uService.getUserInformation())){  /* Si se cumple, es que no se ha iniciado sesión */
      this.router.navigate(["/security/user/login"]);
      return false;
    }else{
      return true;
    }
}

}
