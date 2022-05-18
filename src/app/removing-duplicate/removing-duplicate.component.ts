import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-removing-duplicate',
  templateUrl: './removing-duplicate.component.html',
  styleUrls: ['./removing-duplicate.component.scss']
})
export class RemovingDuplicateComponent implements OnInit {

  users = [
    { id: 1, name: "Yaman" , system: "Call Center"},
    { id: 4, name: "Talha" , system: "Web Link"},
    { id: 5, name: "Maher" , system: "Email"},
    { id: 2, name: "Omar", system: "Email"},
    { id: 3, name: "Ahmad" , system: "Call Center"},
    { id: 5, name: "Maher" , system: "Call Center"},
    { id: 7, name: "Khalid" , system: "Web Link"},
    { id: 8, name: "Osama" , system: "Web Link"},
    { id: 6, name: "Mahmoud" , system: "Call Center"},
    { id: 2, name: "Omar", system: "Call Center"}
  ];
 u1=this.users;
  subSet = [
    { id: 6, name: "Mahmoud" , system: "Call Center"},
   { id: 1, name: "Yaman" , system: "Call Center"},
    { id: 2, name: "Omar", system: "Call Center"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onclick()
  {
    
      this.u1 = this.u1.filter((value, index,self) => 
        self.findIndex((ele)=>['id'].every(ele2=>ele.id==value.id))===index)
       
      console.log(this.u1)
 

  

  }



}
