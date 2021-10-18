import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { finalize } from 'rxjs/operators';
@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  auth: boolean = false;
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.setIsLoading(true);
    const UpdatedRequest = request.clone({
      headers: this.auth
        ? request.headers.append('Autherization', 'sd3a454874521asdasdasd')
        : request.headers,
    });

    // REQUEST REACH TO SERVER
    return (
      next
        .handle(UpdatedRequest)
        // AFTER REQUEST FINISHED
        .pipe(finalize(() => this.loaderService.setIsLoading(false)))
    );
  }
}
