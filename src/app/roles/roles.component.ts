import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators,FormArray,FormControl} from '@angular/forms';

import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements OnInit {
  
  selectedValue:any;
  receivedRoles: any;
  dynamicForm : FormGroup;
  
  childes:any;
  childarray:Array<object>[]=[];
  selected:boolean=false;
  constructor(private rol:ServiceDataService,private formBuilder: FormBuilder) { 
    
    // interface child{
    //   children: []
    //   createDate: null
    //   id: number
    //   roleColor: number
    //   roleDescAr: string
    //   roleDescEn: string
    //   roleID: number
    //   surveyID: number
    //   }

    this.dynamicForm = this.formBuilder.group({})
  }
 
  ngOnInit(): void {
    this.rol.getroles().subscribe(data=>{
      this.receivedRoles=data;
      console.log(this.receivedRoles)
    
      // if(this.selectedValue.roleID==null)
      // {
      //   console.log(this.selectedValue.children);
      // }
    })
    this.dynamicForm = this.formBuilder.group({
      role: ['', Validators.required],
      roles: new FormArray([])
  });
}


    get f() { return this.dynamicForm.controls; }
    get t() { return this.f['roles' ]as FormArray; }
    get roleFormGroups() { return this.t.controls as FormGroup[]; }

    


    onChange(e:any) {
      
       this.childes=e.value.children ;
      //  let child2=this.childes.value.children;
      this.childarray.push(this.childes);
      console.log(this.childarray);
      console.log(this.childes);
        
        this.t.push(this.formBuilder.group({
          subchild: (this.childes)
          }));
      console.log(this.dynamicForm.value)

      // if (this.t.length < numberOfTickets) {
      //     for (let i = this.t.length; i < numberOfTickets; i++) {
      //         this.t.push(this.formBuilder.group({
      //             subRoles: ['', Validators.required],
                 
      //         }));
      //     }
      // } 
    }



}
