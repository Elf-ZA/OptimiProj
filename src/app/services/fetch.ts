import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DataModel} from '../Interface/data-interface'; 

@Injectable({providedIn: 'root'})

export class Fetcher {
    private data: DataModel[] = [];

    constructor(private http:HttpClient) {}

    getData(){
        return this.http.get<DataModel[]>('http://localhost:3000/projects/');
    }

    setData(data: DataModel[]) {
        this.data = data
    }

    getTest(){
        this.http.get('http://localhost:3000/test').subscribe(res=>{
            console.log(res);
        })
    }
}