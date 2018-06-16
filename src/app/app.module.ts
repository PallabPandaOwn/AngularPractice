import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TestComponent } from './test/test.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
