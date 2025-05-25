import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FetchAndScrollComponent } from './fetch-and-scroll/fetch-and-scroll.component';
import { ScrollSearchSelectComponent } from './scroll-search-select.component';

@NgModule({
  declarations: [ScrollSearchSelectComponent, FetchAndScrollComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule, // Import CommonModule here],
    MatProgressSpinnerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [
    ScrollSearchSelectComponent,
    FetchAndScrollComponent,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
  ],
})
export class ScrollSearchSelectModule {}
