import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McilabComponent } from './scenarios/mcilab/mcilab.component';
import { ItslabComponent } from './scenarios/itslab/itslab.component';
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


const routes: Routes = [
  {
    path: 'mcilab',
    component: McilabComponent
  },
  {
    path: 'itslab',
    component: ItslabComponent
  },
  {
    path: 'blackboard',
    component: BlackboardScenComponent
  },
  {
    path: 'corridor1',
    component: CorridorComponent
  },
  {
    path: 'corridor2',
    component: Corridor2Component
  },
  {
    path: 'entry',
    component: EntryComponent
  },
  {
    path: 'machine',
    component: MachineComponent
  },
  {
    path: 'overlight',
    component: OverlightComponent
  },
  {
    path: 'proprof',
    component: ProprofComponent
  },
  {
    path: 'roof',
    component: RoofComponent
  },
  {
    path: 'secretariat',
    component: SecretariatComponent
  },
  {
    path: 'stage',
    component: StageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
