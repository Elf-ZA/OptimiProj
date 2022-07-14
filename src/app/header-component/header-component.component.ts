import { Component, OnInit,} from '@angular/core';
import {Fetcher} from '../services/fetch'


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})


export class HeaderComponentComponent implements OnInit {
  

  dropdown = {'border': '2px red solid',
              'position': 'relative',
              'display': 'inline-block'}
 

  arrSystems: any[] = [];  
  arrFiltered :any[] =[];
 
  inputFilter: any;
  
  
  constructor(private fetchData: Fetcher) { }

  ngOnInit(): void { 
    
 
    this.fetchData.getData().subscribe(res =>{
      this.fetchData.setData(res);
      this.arrSystems = res;

      this.arrFiltered = this.arrSystems;
    });
}

  filterGroups(){    
    
    this.arrFiltered = this.arrSystems.map((e) => {
       return {...e, groups: e.groups.filter((group:any) => group.name.toLowerCase().includes(this.inputFilter.toLowerCase()))}      
    })
    }

    stopPropagation(event: any){
      event.stopPropagation();
    }
  }
