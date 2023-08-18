import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Default route
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostComponent },
  { path: 'albums', component: AlbumComponent },
  // Add more routes here if needed
  { path: '**', redirectTo: '/users' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
