import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetDescriptorInfoResponse } from '../types/get-descriptor-info.interface';
import { BASE_URL } from '../types/constants';
import { Observable } from 'rxjs';
import {
  ValidateAddressRequest,
  ValidateAddressResponse,
} from '../types/validate-address.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private readonly http = inject(HttpClient);

  getDescriptorInfo(descriptor: string): Observable<GetDescriptorInfoResponse> {
    return this.http.post<GetDescriptorInfoResponse>(`${BASE_URL}/getdescriptorinfo`, {
      descriptor,
    });
  }

  validateAddress(request: ValidateAddressRequest): Observable<ValidateAddressResponse> {
    return this.http.post<ValidateAddressResponse>(`${BASE_URL}/validateaddress`, request);
  }
}
