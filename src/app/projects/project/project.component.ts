import { Component, computed, input } from '@angular/core';

import { type Project } from './project.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  user = input.required<Project>();

  imagePath = computed(() => 'projects/' + this.user().avatar);
}
