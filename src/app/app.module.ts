import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppHIghliteDirective } from './app-highlite.directive';
import { HostListnerDirective } from './host-listner.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AppHIghliteDirective,
    HostListnerDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
