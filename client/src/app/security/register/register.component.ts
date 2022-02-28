import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientModel } from 'src/app/models/client.model';
import { ClientModule } from 'src/app/client/client.module';
import { UserModel } from 'src/app/models/user.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private router: Router, private userService: UserService, private clientS: ClientService) { 
    this.categoryFormGroup = this.formGroupCreator();
  }

  /* OnRegister(){
    this.userService.registerUser(this.).subscribe(item =>{
      console.log("Se registró");
    })
  } */
  categoryFormGroup: FormGroup;

  formGroupCreator(): FormGroup{
     /* los campos que se solicitan */
    return new FormGroup({ 
      username : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    });
  }


  get username(){
    return this.categoryFormGroup.get('username');
  }

  get email(){
    return this.categoryFormGroup.get('email');
  }

  get name(){
    return this.categoryFormGroup.get('name');
  }

  get password(){
    return this.categoryFormGroup.get('password');
  }



  ngOnInit(): void {
  }

  buildUserData(): UserModel{
    let user1: UserModel = {
      id: null,
    realm: this.name.value,
    username: this.username.value,
    email: this.email.value,
    password: this.password.value,
    rol: 3,
    user: null
    }
    return user1;
  }

  

  /* builClientData(): ClientModel{
    let client1: ClientModel = {
      id: null,
    name: this.name.value,
    lname: this.lastname.value,
    document: this.document.value,
    cel: this.cel.value,
    email: this.email.value,
    password: this.password.value
    }
    return client1;
  } */


  
  


  /* Guardar la nueva categoria creada usando formgropu, from control name..*/
  saveNewUser():void{
    if(this.categoryFormGroup.valid){
      this.userService.registerUser(this.buildUserData()).subscribe(item => {
        /* saveMessageModal("oeee"); */
        alert("Se ha creado client");
        this.router.navigate(["/product/home"]);
      });
    }else{
      alert("Llene todos los campos correctamente");
    }
  }


  

}  


