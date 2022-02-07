import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { CountUiComponent } from './components/count-ui/count-ui.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [CounterComponent, CountUiComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CounterModule {}
