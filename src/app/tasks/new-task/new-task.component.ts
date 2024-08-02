import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { CanDeactivate, CanDeactivateFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  projectid = input.required<string>();
  enteredTitle = signal('');
  enteredDesc = signal('');
  enteredType = signal('');
  enteredPriority = signal('');
  submitted = false;
  private tasksService = inject(TasksService);
  private router = inject(Router);

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle(),
      description: this.enteredDesc(),
      type: this.enteredType(),
      priority:this.enteredPriority(),
    },
      this.projectid()
    );
    this.submitted=true;

    this.router.navigate(['/projects',this.projectid(),'tasks'],{
      replaceUrl: true,
    });
  }
}
export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (component) => {
  if (component.submitted) {
    return true;
  }
  if (component.enteredTitle() || component.enteredDesc() || component.enteredType() || component.enteredPriority()){
    return window.confirm('Do you really want to leave? You will lose the entered data.')
  }
  return true;
}