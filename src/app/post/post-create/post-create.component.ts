import {Component, EventEmitter} from "@angular/core";
import {FormsModule, NgForm} from "@angular/forms";
import {MatError, MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {Post} from "../post.model";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
  imports: [
    FormsModule,
    MatInput,
    MatFormField,
    MatCard,
    MatButton,
    MatExpansionModule,
    MatToolbar,
    MatCardContent,
    MatIcon,
    MatLabel,
    MatError,
    NgIf
  ],
  standalone: true
})
export class PostCreateComponent {

  enteredTitle = '';
  enteredContent = '';

  constructor(
    public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
