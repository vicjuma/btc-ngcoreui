import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../types/constants';
import { HttpClient } from '@angular/common/http';
import { CreateRawTransactionRequest } from '../types/create-raw-transaction.interface';
import {
  FundRawTransactionRequest,
  FundRawTransactionResponse,
} from '../types/fund-raw-transaction.interface';
import { CreatePsbtRequest } from '../types/create-psbt.interface';
import { UtxoUpdatePsbtRequest, UtxoUpdatePsbtResponse } from '../types/utxo-update-psbt.interface';
import {
  DescriptorProcessPsbtRequest,
  DescriptorProcessPsbtResponse,
} from '../types/descriptor-process-psbt.interface';
import { AnalyzePsbtRequest, AnalyzePsbtResponse } from '../types/analyze-psbt.interface';
import {
  TestMempoolAcceptRequest,
  TestMempoolAcceptResponse,
} from '../types/test-mempool-accept.interface';

@Injectable({
  providedIn: 'root',
})
export class RawTransactionService {
  private readonly http = inject(HttpClient);

  analyzePsbt(request: AnalyzePsbtRequest): Observable<AnalyzePsbtResponse> {
    return this.http.post<AnalyzePsbtResponse>(`${BASE_URL}/analyzepsbt`, request);
  }

  createPsbt(request: CreatePsbtRequest): Observable<string> {
    return this.http.post<string>(`${BASE_URL}/createpsbt`, {
      inputs: request.inputs,
      outputs: request.outputs,
      locktime: request.locktime ?? 0,
      replaceable: request.replaceable ?? true,
      version: request.version ?? 2,
      psbt_version: request.psbt_version ?? 2,
    });
  }

  createRawTransaction(request: CreateRawTransactionRequest): Observable<string> {
    return this.http.post<string>(`${BASE_URL}/createrawtransaction`, {
      inputs: request.inputs,
      outputs: request.outputs,
      locktime: request.locktime ?? 0,
      replaceable: request.replaceable ?? true,
      version: request.version ?? 2,
    });
  }

  descriptorProcessPsbt(
    request: DescriptorProcessPsbtRequest,
  ): Observable<DescriptorProcessPsbtResponse> {
    return this.http.post<DescriptorProcessPsbtResponse>(`${BASE_URL}/descriptorprocesspsbt`, {
      psbt: request.psbt,
      descriptors: request.descriptors,
      sighashtype: request.sighashtype,
      bip32derivs: request.bip32derivs ?? true,
      finalize: request.finalize ?? true,
    });
  }

  fundRawTransaction(request: FundRawTransactionRequest): Observable<FundRawTransactionResponse> {
    return this.http.post<FundRawTransactionResponse>(`${BASE_URL}/fundrawtransaction`, {
      hexstring: request.hexstring,
      options: request.options,
      iswitness: request.iswitness,
    });
  }

  testMempoolAccept(request: TestMempoolAcceptRequest): Observable<TestMempoolAcceptResponse> {
    return this.http.post<TestMempoolAcceptResponse>(`${BASE_URL}/testmempoolaccept`, {
      rawtxs: request.rawtxs,
      maxfeerate: request.maxfeerate,
    });
  }

  utxoUpdatePsbt(request: UtxoUpdatePsbtRequest): Observable<UtxoUpdatePsbtResponse> {
    return this.http.post<UtxoUpdatePsbtResponse>(`${BASE_URL}/utxoupdatepsbt`, request);
  }
}
