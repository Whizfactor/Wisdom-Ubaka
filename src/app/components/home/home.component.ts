import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skills = [
    { name: 'HTML', progress: 95 },
    { name: 'CSS', progress: 90 },
    { name: 'JavaScript', progress: 85 },
    { name: 'Angular', progress: 85 },
    { name: 'Django', progress: 85 },
    { name: 'Ionic', progress: 95 },
    { name: 'Bootstrap', progress: 95 },
    { name: 'TypeScript', progress: 85 },
    { name: 'WordPress', progress: 95 },
    { name: 'Python', progress: 85 },
    { name: 'jQuery', progress: 95 }
  ];

  constructor(
  ) { }

  public navCards:any = [
    {title: "All Users", url: "/users"},
    {title: "All Albums", url: "/albums"},
    {title: "All Posts", url: "/posts"},
    {title: "Calculator", url: "/calculator"},
    {title: "Design Quotes", url: "/design-quotes"}
  ];

  onProgressHover(event: Event, progress: number) {
    const progressBar = event.target as HTMLDivElement;
    progressBar.innerHTML = `${progress}%`;
    progressBar.style.backgroundColor = 'gold';
  }

  onProgressMouseOut(event: Event) {
    const progressBar = event.target as HTMLDivElement;
    progressBar.innerHTML = `${progressBar.getAttribute('aria-valuenow')}%`;
    progressBar.style.backgroundColor = '#4CAF50';
  }

  onInfographicHover() {
    const infographic = document.querySelector('.infographic');
    infographic?.classList.add('infographic-hover');
  }

  onInfographicMouseOut() {
    const infographic = document.querySelector('.infographic');
    infographic?.classList.remove('infographic-hover');
  }


  ngOnInit() {
  }
}
