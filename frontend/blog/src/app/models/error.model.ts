import { HttpErrorResponse } from '@angular/common/http';

export interface ErrorModel {
  payload: HttpErrorResponse;
  type: string;
}
