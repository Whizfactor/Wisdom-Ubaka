import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { AlbumComponent } from './components/album/album.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'album/:id', component: AlbumDetailsComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  // Add more routes here if needed
  { path: '**', redirectTo: '/home' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
