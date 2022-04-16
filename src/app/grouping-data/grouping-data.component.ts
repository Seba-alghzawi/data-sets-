import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-grouping-data',
  templateUrl: './grouping-data.component.html',
  styleUrls: ['./grouping-data.component.scss']
})
export class GroupingDataComponent implements OnInit {
 
  dataReceived:any;
  constructor( private ser:ServiceDataService ) { 

  }

  ngOnInit(): void {
    this.ser.getdata().subscribe(data=>{
      this.dataReceived=data ;
      console.log('the data before grouping');
      console.log(this.dataReceived)
      
    })
  }

  onclick()
  {
    
    const result =this.dataReceived.trackingData.reduce((groupedData:any,data:any)=>{
      const name=data.nameEn;
      if(groupedData[name]==null)
        groupedData[name]=[];
      groupedData[name].push(data);
      return groupedData;
    },{})

    console.log('the data After grouping');
    console.log(result);
  }
  
}
