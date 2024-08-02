import { Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent,RouterLink],
})
export class TasksComponent implements OnInit{
  projectid = input.required<string>();
  // order = input<'asc' | 'desc' >();
  order = signal< 'asc' | 'desc' >('desc');
  private tasksService = inject(TasksService);
  projectTasks = computed(() => 
    this.tasksService
  .allTasks()
  .filter((task) => task.projectid === this.projectid())
  .sort((a,b)=>{
    if (this.order()=== 'desc'){
      return a.id>b.id? -1:1;
    }else{
      return a.id>b.id? 1:-1;
    }
  })
);
private activatedRoute = inject(ActivatedRoute);
  // destroyRef: any;
  private destroyRef = inject(DestroyRef);

ngOnInit(): void {
  const subscripton =this.activatedRoute.queryParams.subscribe({
    next: (params) => (this.order.set(params['order'])),
  });
  this.destroyRef.onDestroy(() => subscripton.unsubscribe());
}
}
