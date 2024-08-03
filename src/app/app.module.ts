import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthInterceptor} from "./auth/auth-interceptor";
import {ErrorInterceptor} from "./error-interceptor";
import {ErrorComponent} from "./error/error.component";
import {AngularMaterialModule} from "./angular-material.module";
import {PostModule} from "./post/post.module";
import {AuthRoutingModule} from "./auth/auth-routing.module";


@NgModule({
  declarations: [
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    NgForOf,
    NgIf,
    MatIcon,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    AngularMaterialModule,
    PostModule,
    AuthRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  exports: [
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
