import { Routes } from "@angular/router";
import { routes as projectRoutes } from "./projects/projects.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { ProjectTasksComponent, resolveTitle } from "./projects/project-tasks/project-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProjectsComponent } from "./projects/projects.component";

 export const routes: Routes = [

        {
            path: '',
            component:NoTaskComponent,
            title: 'No Project selected',
        },
        
        {
            path: 'projects',
            component: ProjectsComponent,
          
        },
    
        {
            path:'projects/:projectid',
            component:ProjectTasksComponent,
            children: projectRoutes,
            title: resolveTitle
        },
        {
            path:'**',
            component:NotFoundComponent,
        },
       
    
 ];