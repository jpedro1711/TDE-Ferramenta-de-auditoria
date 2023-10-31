import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ChecklistDetailsComponent } from './components/checklist-details/checklist-details.component';

@NgModule({
  declarations: [AppComponent, ChecklistComponent, ChecklistDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
