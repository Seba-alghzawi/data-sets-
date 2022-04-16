import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators,FormArray,FormControl} from '@angular/forms';
import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements OnInit {
 
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

    })
    this.dynamicForm = this.formBuilder.group({
      role: ['', Validators.required],
      roles: new FormArray([])
  });

  }
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f['roles' ]as FormArray; }
    get ticketFormGroups() { return this.t.controls as FormGroup[]; }

  

  
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
