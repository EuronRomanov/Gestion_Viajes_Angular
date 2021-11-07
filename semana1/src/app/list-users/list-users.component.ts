import { Component, OnInit } from '@angular/core';
import { Users } from "../Models/Users";



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
   file!:File;
   photoSelected: string|ArrayBuffer ="assets/images/no-image.png";
   listUsers:Users[];
  constructor() { 
    this.listUsers=[];
  }

  ngOnInit(): void {
  }


  onPhotoSelected($event:any ):void{
    if($event.target.files && $event.target.files[0]){
      this.file=<File>$event.target.files[0];
      //image preview
      const reader=new FileReader();
      reader.onload= e=>this.photoSelected=reader.result as string;
      reader.readAsDataURL(this.file);
    //console.log(this.photoSelected);
    }
  }

  onSubmit(nombre:string,apellido:string,adress:string, password:string,observacion:string):boolean{
    this.listUsers.push(new Users(nombre,apellido,adress, password,observacion,this.file));
    console.log(this.listUsers);
    return false;
  }

  

}
