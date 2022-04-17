import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators,FormArray,FormControl} from '@angular/forms';
import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements OnInit {
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
 contact={
   firstname:'seba',
   lastname:'alghzawi',
   contacts:[{email:'',number:''}]
  };
 form:FormGroup=this.formBuilder.group({
   firstName:this.contact.firstname,
   lastName:this.contact.lastname,
   contacts:this.buildContacts(this.contact.contacts)
 })
  receivedRoles: any;
  dynamicForm : FormGroup;
  children:any;
  child:any;
  selected:boolean=false;
  constructor(private rol:ServiceDataService,private formBuilder: FormBuilder) { 
    this.dynamicForm = this.formBuilder.group({})
  }
 
  ngOnInit(): void {
    this.rol.getroles().subscribe(data=>{
      this.receivedRoles=data;
      console.log(this.receivedRoles)
    //  for(let i=0;i<this.users.length;i++)
    //  {
    //    this.addContactField(this.users[i].name);
    //  }
     this.users.forEach(el=>{
      this.addContactField(el.name);
     }

     )
     

    })
    this.dynamicForm = this.formBuilder.group({
      role: ['', Validators.required],
      roles: new FormArray([])
  });

  }
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f['roles' ]as FormArray; }
    get ticketFormGroups() { return this.t.controls as FormGroup[]; }

  
    get contacts(): FormArray {
      return this.form.get('contacts') as FormArray;
    }
  
    buildContacts( contacts:{email:string,number:string}[]=[])
    {
      return this.formBuilder.array(contacts.map(contact => this.formBuilder.group(contact)));
    }


    addContactField(username:string) {
       this.contacts.push(this.formBuilder.group({number:username, email: null}))
    }

    submit(value: any): void {
      console.log(value)
    }
  
    onChange(e:any) {
      this.selected=!this.selected;
      const parent = e.target.value || 0;
     
      // if(parent.children!=0)
      // {
      //   this.child=parent.children;
      // }



      // if (this.t.length < numberOfTickets) {
      //     for (let i = this.t.length; i < numberOfTickets; i++) {
      //         this.t.push(this.formBuilder.group({
      //             subRoles: ['', Validators.required],
                 
      //         }));
      //     }
      // } 
    }



}
