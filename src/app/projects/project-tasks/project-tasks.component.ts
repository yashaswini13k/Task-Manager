import { Component, computed, inject, input } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'app-project-tasks',
    standalone: true,
    imports: [RouterOutlet,RouterLink],
    templateUrl: './project-tasks.component.html',
    styleUrl: './project-tasks.component.css',   
})
export class ProjectTasksComponent {
  projectid = input.required<string>();
  private projectsService = inject(ProjectsService);

  projectName = computed(() => this.projectsService.users.find(p => p.id === this.projectid())?.name
);
}

export const resolveProjectName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const projectsService = inject(ProjectsService);
  const projectName =
  projectsService.users.find(
    (p) => p.id === activatedRoute.paramMap.get('projectid')
  )?.name || '';
  return projectName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
 return resolveProjectName(activatedRoute,routerState) + '\'s Bugs'
}

