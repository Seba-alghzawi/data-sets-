import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements OnInit {
  testNull=false;
  receivedRoles: any;
  dynamicForm: FormGroup;
  childes: any;
  childarray: Array<{
    children: []
    createDate: null
    id: number
    roleColor: number
    roleDescAr: string
    roleDescEn: string
    roleID: number
    surveyID: number
  }>[] = [];
  selected: boolean = false;
  flatarr:any[]=[];
  ff:any[]=[];
  toppings = new FormControl();
  filtered:string="";
  constructor(private rol: ServiceDataService, private formBuilder: FormBuilder) {
    this.dynamicForm = this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.rol.getroles().subscribe(data => {
      this.receivedRoles = data;
      console.log(this.receivedRoles)

    })
    this.dynamicForm = this.formBuilder.group({
      role: ['', Validators.required],
      roles: new FormArray([])
    });
  }


  get f() { return this.dynamicForm.controls; }
  get t() { return this.f['roles'] as FormArray; }
  get roleFormGroups() { return this.t.controls as FormGroup[]; }



  onChange1(e: any) {
    this.childes = e.children;
    this.childarray.push(this.childes);
    console.log( e);
    console.log(this.childarray);
    this.t.push(this.formBuilder.group({
        subchild: this.childes
      }));
    
    console.log(this.dynamicForm.value)


  }
  onChange2(e: any,index:number) {

    this.childes = e.children;
    this.t.push(this.formBuilder.group({
          subchild: (e)
      }));
      if(index)
      {
        this.t.removeAt(index+1);
      }
      else{
        this.childarray.push(this.childes);
      }
      console.log(this.childarray);
      console.log(this.childes);
      console.log(this.dynamicForm.value)
    // this.childes = e.children;
    // this.childarray.push(this.childes);
    // console.log(this.childarray);
    // console.log(this.childes);
    // this.t.push(this.formBuilder.group({
    //     subchild: (this.childes)
    // }));
    //    this.childarray.splice(index+1,this.childarray.length);
    // console.log(this.dynamicForm.value)

  }


  flat(xroles:any)
  {
        
        xroles.forEach((element)=> {
          
          if((element.children.length)==0)
          {
            return [];
          }
          else
          {
            
            this.flatarr.push(element.children)
            return this.flatarr.concat(this.flat(element.children))
           
          }
        });
         console.log(this.flatarr);//flatarr contain array of children to each level need another flat
         this.ff=this.flatarr.flat();//flat nested arrays
        console.log(this.ff);
  }



}
