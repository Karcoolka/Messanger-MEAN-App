import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoading = false;

    onLogin(form: NgForm) {
        this.isLoading = true;
        console.log(form.value);
    }

}
