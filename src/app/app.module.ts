import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {PostCreateComponent} from "./post/post-create/post-create.component";
import {PostListComponent} from "./post/post-list/post-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

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
    MatIcon
  ],
  providers: [],
  exports: [
    HeaderComponent,
    PostListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
