import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../types/constants';
import { GetNetworkInfoResponse } from '../types/get-network-info.interface';
import { Observable } from 'rxjs';
import { GetBlockchainInfoResponse } from '../types/get-blockchain-info.interface';
import { GetBestBlockHashResponse } from '../types/get-best-block-hash.interface';
import { GetBlockCountResponse } from '../types/get-block-count.interface';
import { GetConnectionCountResponse } from '../types/get-connection-count.interface';
import { GetTxOutRequest, GetTxOutResponse } from '../types/get-tx-out.interface';
import {
  GetTxSpendingPrevoutRequest,
  GetTxSpendingPrevoutResponse,
} from '../types/get-tx-spending-prev-out.interface';
import { GetMempoolInfoResponse } from '../types/get-mempool-info.interface';
import { GetRawMempoolRequest, GetRawMempoolResponse } from '../types/get-raw-mempool.interface';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  private readonly http = inject(HttpClient);

  getBestBlockHash(): Observable<GetBestBlockHashResponse> {
    return this.http.get<GetBestBlockHashResponse>(`${BASE_URL}/getbestblockhash`);
  }

  getBlockchainInfo(): Observable<GetBlockchainInfoResponse> {
    return this.http.get<GetBlockchainInfoResponse>(`${BASE_URL}/getblockchaininfo`);
  }

  getBlockCount(): Observable<GetBlockCountResponse> {
    return this.http.get<GetBlockCountResponse>(`${BASE_URL}/getblockcount`);
  }

  getConnectionCount(): Observable<GetConnectionCountResponse> {
    return this.http.get<GetConnectionCountResponse>(`${BASE_URL}/getconnectioncount`);
  }

  getMempoolInfo(): Observable<GetMempoolInfoResponse> {
    return this.http.get<GetMempoolInfoResponse>(`${BASE_URL}/getmempoolinfo`);
  }

  getNetworkInfo(): Observable<GetNetworkInfoResponse> {
    return this.http.get<GetNetworkInfoResponse>(`${BASE_URL}/getnetworkinfo`);
  }

  getRawMempool(request: GetRawMempoolRequest = {}): Observable<GetRawMempoolResponse> {
    return this.http.post<GetRawMempoolResponse>(`${BASE_URL}/getrawmempool`, {
      verbose: request.verbose ?? false,
      mempool_sequence: request.mempool_sequence ?? false,
    });
  }

  getTxOut(request: GetTxOutRequest): Observable<GetTxOutResponse | null> {
    return this.http.post<GetTxOutResponse | null>(`${BASE_URL}/gettxout`, {
      txid: request.txid,
      n: request.n,
      include_mempool: request.include_mempool ?? true,
    });
  }

  getTxSpendingPrevout(
    request: GetTxSpendingPrevoutRequest,
  ): Observable<GetTxSpendingPrevoutResponse[]> {
    return this.http.post<GetTxSpendingPrevoutResponse[]>(`${BASE_URL}/gettxspendingprevout`, {
      outputs: request.outputs,
      options: request.options,
    });
  }
}
