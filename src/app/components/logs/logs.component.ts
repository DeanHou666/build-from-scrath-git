import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs:Log[]
  constructor(private logService:LogService) { }

  ngOnInit() {
    this.logService.getLogs().subscribe(logs => this.logs=logs)
  }
  onSelect(log:Log){
    this.logService.setFormLog(log)
  }
  onDelete(log:Log){
    if(confirm('sure to delete?')){
      this.logService.deleteLog(log)
    }
  }
}
