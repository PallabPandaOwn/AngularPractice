import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
serverId=1;
serverstatus='offline'
getServerStatus(){ // adding a function to component.
    return this.serverstatus;
}
}