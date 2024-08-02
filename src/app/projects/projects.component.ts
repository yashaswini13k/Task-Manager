import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [ProjectComponent],
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);
  users = this.projectsService.users;
}
