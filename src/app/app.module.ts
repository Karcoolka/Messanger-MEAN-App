import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

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
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    PostListComponent
  ],
  imports: [
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
  ],
  providers: [],
  exports: [
    HeaderComponent,
    PostListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
