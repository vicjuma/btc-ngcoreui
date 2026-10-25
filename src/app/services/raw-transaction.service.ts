import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../types/constants';
import { HttpClient } from '@angular/common/http';
import { CreateRawTransactionRequest } from '../types/create-raw-transaction.interface';
import {
  FundRawTransactionRequest,
  FundRawTransactionResponse,
} from '../types/fund-raw-transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class RawTransactionService {
  private readonly http = inject(HttpClient);
  createRawTransaction(request: CreateRawTransactionRequest): Observable<string> {
    return this.http.post<string>(`${BASE_URL}/createrawtransaction`, {
      inputs: request.inputs,
      outputs: request.outputs,
      locktime: request.locktime ?? 0,
      replaceable: request.replaceable ?? true,
      version: request.version ?? 2,
    });
  }

  fundRawTransaction(request: FundRawTransactionRequest): Observable<FundRawTransactionResponse> {
    return this.http.post<FundRawTransactionResponse>(`${BASE_URL}/fundrawtransaction`, {
      hexstring: request.hexstring,
      options: request.options,
      iswitness: request.iswitness,
    });
  }
}
