import { Routes } from '@angular/router';
import {PostListComponent} from "./post/post-list/post-list.component";
import {PostCreateComponent} from "./post/post-create/post-create.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AuthGuard} from "./auth/auth.guard";

export const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard]},
  { path: 'edit/:postId', component: PostCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
