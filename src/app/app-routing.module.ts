import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { AlbumComponent } from './components/album/album.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { DesignQuotesComponent } from './components/design-quotes/design-quotes.component';
// import { CalculatorComponent } from './components/calculator/calculator.component';
import { Error404Component } from './components/error-404/error-404.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostComponent },
  { path: 'albums', component: AlbumComponent },
  // { path: 'calculator', component: CalculatorComponent },
  { path: 'design-quotes', component: DesignQuotesComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'albums/:id', component: AlbumDetailsComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  // Add more routes here if needed
  { path: '**', component: Error404Component }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
