import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { ProjectsComponent } from "./projects/projects.component";
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, ProjectsComponent, RouterOutlet],
})
export class AppComponent {}
