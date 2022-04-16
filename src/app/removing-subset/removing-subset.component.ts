import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-removing-subset',
  templateUrl: './removing-subset.component.html',
  styleUrls: ['./removing-subset.component.scss']
})


export  class RemovingSubsetComponent implements OnInit {

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
    console.log(this.users)
    
    
  }
  
 
  onclick()
  {
   
    console.log(this.subSet)
    this.subSet.forEach((element) => {
      let x=element.id;
      this.u1.forEach((element,index) => {
        if(element.id==x)
        {
          this.users.splice(index,1)
        }
      });
    });
    console.log(this.u1);
  }
  

}
