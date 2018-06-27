import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isEnable=false; // Initially disable
  serverCreationStatus = "Server was not created"
  serverName='';
  constructor() { 

    //Disable after 2 sec
    setTimeout(()=>{
      this.isEnable=true;
    },2000)

    //enable again after 10 sec
    setTimeout(()=>{
      alert("Enable Button Again !")
      this.isEnable=true;
    },5000)
  }
  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreationStatus="Server created";
    this.isEnable=false
  }

  onServerUpdateName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
