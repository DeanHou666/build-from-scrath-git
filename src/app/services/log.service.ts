import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs:Log[];
  private logSource=new BehaviorSubject({id:null,text:null,date:null})
  selectLog=this.logSource.asObservable()
  constructor() { 
    this.logs=[
      {id:'1',text:'Generate Components',date:new Date('12/25/2017 12:23:01')},
      {id:'2',text:'Generate Components01',date:new Date('12/26/2017 12:23:01')},
      {id:'3',text:'Generate Components02',date:new Date('12/27/2017 12:23:01')}
    ]
  }
  getLogs():Observable<Log[]>{
    return of(this.logs)
  }
  setFormLog(log:Log){
    this.logSource.next(log)
  }

  addLog(log:Log){
    this.logs.unshift(log)
  }

  updateLog(log:Log){
    this.logs.forEach((cur,index)=>{
      if(log.id === cur.id){
        this.logs.splice(index,1);
      }
    })
    this.logs.unshift(log)
  }
  deleteLog(log:Log){
    this.logs.forEach((cur,index)=>{
      if(log.id === cur.id){
        this.logs.splice(index,1);
      }
    })
  }
}
