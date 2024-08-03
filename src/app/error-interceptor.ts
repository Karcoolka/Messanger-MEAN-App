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
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.error.error.message);
          return throwError(error);
        })
      );
  }
}
