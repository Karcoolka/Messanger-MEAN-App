import {NgModule} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatPaginator,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatPaginator,
    MatDialogModule
  ]
})
export class AngularMaterialModule {
}
