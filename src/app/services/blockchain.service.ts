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

  getNetworkInfo(): Observable<GetNetworkInfoResponse> {
    return this.http.get<GetNetworkInfoResponse>(`${BASE_URL}/getnetworkinfo`);
  }

  getTxOut(request: GetTxOutRequest): Observable<GetTxOutResponse | null> {
    return this.http.post<GetTxOutResponse | null>(`${BASE_URL}/gettxout`, {
      txid: request.txid,
      n: request.n,
      include_mempool: request.include_mempool ?? true,
    });
  }
}
