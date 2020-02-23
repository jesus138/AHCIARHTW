import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ImportsModule } from './imports/imports.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { McilabComponent } from './scenarios/mcilab/mcilab.component';
import { ItslabComponent } from './scenarios/itslab/itslab.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { BlackboardComponent } from './components/blackboard/blackboard.component';
import { BlackboardLargeComponent } from './components/blackboard-large/blackboard-large.component';
import { MapComponent } from './components/map/map.component';
import { WeatherConfigComponent } from './components/weather-config/weather-config.component';
import { BlackboardConfigComponent } from './components/blackboard-config/blackboard-config.component';
import { ShortPlanComponent } from './components/short-plan/short-plan.component';
import { EventsComponent } from './components/events/events.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScenarioConfigComponent } from './components/scenario-config/scenario-config.component';
import { EmailComponent } from './components/email/email.component';
import { RoomComponent } from './components/room/room.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { ProjectComponent } from './components/project/project.component';
import { AuxilaryComponent } from './components/auxilary/auxilary.component';
import { LearningComponent } from './components/learning/learning.component';
import { ImportantComponent } from './components/important/important.component';
import { OverlayComponent } from './scenarios/overlay/overlay.component';
import { BlackboardScenComponent } from './scenarios/blackboard-scen/blackboard-scen.component';
import { CorridorComponent } from './scenarios/corridor/corridor.component';
import { Corridor2Component } from './scenarios/corridor2/corridor2.component';
import { EntryComponent } from './scenarios/entry/entry.component';
import { MachineComponent } from './scenarios/machine/machine.component';
import { OverlightComponent } from './scenarios/overlight/overlight.component';
import { ProprofComponent } from './scenarios/proprof/proprof.component';
import { RoofComponent } from './scenarios/roof/roof.component';
import { SecretariatComponent } from './scenarios/secretariat/secretariat.component';
import { StageComponent } from './scenarios/stage/stage.component';

@NgModule({
  declarations: [
    AppComponent,
    McilabComponent,
    ItslabComponent,
    WeatherComponent,
    WeatherDetailComponent,
    BlackboardComponent,
    BlackboardLargeComponent,
    MapComponent,
    WeatherConfigComponent,
    BlackboardConfigComponent,
    ShortPlanComponent,
    EventsComponent,
    ScheduleComponent,
    ScenarioConfigComponent,
    EmailComponent,
    RoomComponent,
    ProfessorComponent,
    ProjectComponent,
    AuxilaryComponent,
    LearningComponent,
    ImportantComponent,
    OverlayComponent,
    BlackboardScenComponent,
    CorridorComponent,
    Corridor2Component,
    EntryComponent,
    MachineComponent,
    OverlightComponent,
    ProprofComponent,
    RoofComponent,
    SecretariatComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
