import { Component, OnInit} from '@angular/core';
import {Fetcher} from '../services/fetch'


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})


export class HeaderComponentComponent implements OnInit {
  
  arrSystems: any[] = [];  
  arrFiltered :any[] =[]; 
  inputFilter: any;
  dropdownmenu:boolean = true;  
  
  constructor(private fetchData: Fetcher) { }

  ngOnInit(): void { 
    
 
    this.fetchData.getData().subscribe(res =>{
      this.fetchData.setData(res);
      this.arrSystems = res;

      this.arrFiltered = this.arrSystems;
    });
}
  //WIP
opendrop(){
  this.dropdownmenu = !this.dropdownmenu;    
}

  filterGroups(){    
    
    this.arrFiltered = this.arrSystems.map((e) => {
       return {...e, groups: e.groups.filter((group:any) => group.name.toLowerCase().includes(this.inputFilter.toLowerCase()))}      
    })
    }
      //cleans input after menu closes. Ensures data is populated again when open.
    clearInput(){      
      this.inputFilter = '';
      this.arrFiltered = this.arrSystems;
    }

      // Needs to change.. Blocking input once Highlight pipe activates.
    stopPropagation(event: any){
      event.stopPropagation();
    }
  }
