import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../types/constants';
import { GetNetworkInfoResponse } from '../types/get-network-info.interface';
import { Observable } from 'rxjs';
import { GetBlockchainInfoResponse } from '../types/get-blockchain-info.interface';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  private readonly http = inject(HttpClient);

  getNetworkInfo(): Observable<GetNetworkInfoResponse> {
    return this.http.get<GetNetworkInfoResponse>(`${BASE_URL}/getnetworkinfo`);
  }

  getBlockchainInfo(): Observable<GetBlockchainInfoResponse> {
    return this.http.get<GetBlockchainInfoResponse>(`${BASE_URL}/getblockchaininfo`);
  }
}
