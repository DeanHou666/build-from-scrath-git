import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id:string
  text:string
  date:string
  isNew:boolean=true;
  constructor(private logService:LogService) { }

  ngOnInit() {
    this.logService.selectLog.subscribe(log =>{
      if(log.id != null){
        this.isNew=false;
        this.id=log.id
        this.text=log.text
        this.date=log.date
      }
    })
  }

  onSubmit(){
    if(this.isNew){
      const newLog = {
        id:this.generateUUID(),
        text:this.text,
        date:new Date()
      }
      this.logService.addLog(newLog)
    }else{
      // create log to be updated
      const updLog={
        id:this.id,
        text:this.text,
        date:new Date()
      }
      this.logService.updateLog(updLog)
    }
    this.clearState();
  }

   generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
    }

    clearState(){
      this.isNew=true;
      this.id='';
      this.text='';
      this.date=''
    }

}
