import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetDescriptorInfoResponse } from '../types/get-descriptor-info.interface';
import { BASE_URL } from '../types/constants';
import { Observable } from 'rxjs';
import {
  ValidateAddressRequest,
  ValidateAddressResponse,
} from '../types/validate-address.interface';
import {
  EstimateSmartFeeRequest,
  EstimateSmartFeeResponse,
} from '../types/estimate-smart-fee.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private readonly http = inject(HttpClient);

  estimateSmartFee(request: EstimateSmartFeeRequest): Observable<EstimateSmartFeeResponse> {
    return this.http.post<EstimateSmartFeeResponse>(`${BASE_URL}/estimatesmartfee`, {
      conf_target: request.conf_target,
      estimate_mode: request.estimate_mode ?? 'economical',
      options: request.options,
    });
  }

  getDescriptorInfo(descriptor: string): Observable<GetDescriptorInfoResponse> {
    return this.http.post<GetDescriptorInfoResponse>(`${BASE_URL}/getdescriptorinfo`, {
      descriptor,
    });
  }

  validateAddress(request: ValidateAddressRequest): Observable<ValidateAddressResponse> {
    return this.http.post<ValidateAddressResponse>(`${BASE_URL}/validateaddress`, request);
  }
}
