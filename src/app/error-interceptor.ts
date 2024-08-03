import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler, HttpErrorResponse
} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('ErrorInterceptor', req);
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          alert(error.error.error.message);
          return throwError(error);
        })
      );
  }
}
