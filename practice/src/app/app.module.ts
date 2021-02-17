import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersService } from './about/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeService } from './practice/employee.service';
import { LifecycleChildComponent } from './practice/lifecycle-child.component';
import { LifecycleParentComponent } from './practice/lifecycle-parent.component';
import { NestedComponentChildComponent } from './practice/nested-component-child.component';
import { NestedComponentParentComponent } from './practice/nested-component-parent.component';
import { TwoWayBindingComponent } from './practice/two-way-binding.component';
import { EventBindingComponent } from './practice/event-binding.component';
import { PropertyBindingComponent } from './practice/property-binding.component';
import { InterpolationComponent } from './practice/interpolation.component';
import { PowerPipe } from './practice/exponent.pipe';
import { TitlePipe } from './practice/title.pipe';
import { PracticeComponent } from './practice/practice.component';
import { NgForTrackByComponent } from './practice/ngFor-trackBy.component';
import { PipesComponent } from './practice/pipes.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    LifecycleChildComponent,
    LifecycleParentComponent,
    NestedComponentChildComponent,
    NestedComponentParentComponent,
    TwoWayBindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    PowerPipe,
    TitlePipe,
    PracticeComponent,
    PipesComponent,
    NgForTrackByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [UsersService, HttpClientModule, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
