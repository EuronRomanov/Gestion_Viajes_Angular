import { Component, OnInit,HostBinding,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Users } from '../Models/Users';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
 @Input() galeriaUsuarios!:Users;
 @HostBinding('attr.class') cssClass='col-md-4';
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }

  uploadDocument(file:File):any{
    var photo!:any ;
    let objectURL = URL.createObjectURL(file);       
            photo = this.sanitizer.bypassSecurityTrustUrl(objectURL);
     return photo;
 }

}
