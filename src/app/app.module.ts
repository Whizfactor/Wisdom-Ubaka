import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { AlbumService } from './services/album.service';
import { TodoService } from './services/todo.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { AlbumComponent } from './components/album/album.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    AlbumComponent,
    HomeComponent,
    PostDetailsComponent,
    UserDetailsComponent,
    AlbumDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbCollapseModule
  ],
  providers: [UserService, PostService, AlbumService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
