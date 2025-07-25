import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Dashboard Admin',
      description: 'Panel administrativo con Angular, gráficos y autenticación.',
      image: 'assets/dashboard.png',
      github: 'https://github.com/arnaldovelis/admin-dashboard',
      demo: 'https://arnaldovelis.github.io/admin-dashboard/'
    },
    {
      title: 'Portafolio Personal',
      description: 'Mi portafolio profesional con Angular y Bootstrap.',
      image: 'assets/portfolio.png',
      github: 'https://github.com/arnaldovelis/portfolio',
      demo: 'https://arnaldovelis.github.io/portfolio/'
    }
  ];
}