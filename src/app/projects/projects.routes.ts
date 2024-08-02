import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent, canLeaveEditPage } from "../tasks/new-task/new-task.component";

export const routes: Routes =[
    {
        path:'',
        redirectTo:'tasks',
        pathMatch:'full'
    },
    {
        path: 'tasks',
        component: TasksComponent,
    },
    {
        path: 'tasks/add',
        component: NewTaskComponent,
        canDeactivate:[canLeaveEditPage]
    },
]