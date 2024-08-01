import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {PostListComponent} from "./post/post-list/post-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginator} from "@angular/material/paginator";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AuthInterceptor} from "./auth/auth-interceptor";


@NgModule({
  declarations: [
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    NgForOf,
    NgIf,
    MatIcon,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    MatProgressSpinnerModule,
    MatPaginator,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  exports: [
    HeaderComponent,
    PostListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
