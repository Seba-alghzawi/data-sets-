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
    this.childes = e.value.children;
    this.childarray.push(this.childes);
    console.log(this.childarray);
    console.log(this.childes);
    this.t.push(this.formBuilder.group({
        subchild: (this.childes)
      }));
    
    console.log(this.dynamicForm.value)


  }
  onChange2(e: any,index:number) {
    
    this.childes = e.value.children;
    this.childarray.push(this.childes);
    console.log(this.childarray);
    console.log(this.childes);
    this.t.push(this.formBuilder.group({
        subchild: (this.childes)
    }));
    //  this.childarray.splice(index);
    console.log(this.dynamicForm.value)
  }



}
