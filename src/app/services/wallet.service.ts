import { inject, Injectable } from '@angular/core';
import { CreateWalletRequest, CreateWalletResponse } from '../types/create-wallet.interface';
import { BASE_URL } from '../types/constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EncryptWalletRequest, EncryptWalletResponse } from '../types/encrypt-wallet.interface';
import { GetWalletInfoResponse } from '../types/get-wallet-info.interface';
import { GetBalancesResponse } from '../types/get-balances.interface';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private readonly http = inject(HttpClient);

  createWallet(request: CreateWalletRequest): Observable<CreateWalletResponse> {
    return this.http.post<CreateWalletResponse>(`${BASE_URL}/createwallet`, request);
  }

  encryptWallet(request: EncryptWalletRequest): Observable<EncryptWalletResponse> {
    return this.http.post<EncryptWalletResponse>(`${BASE_URL}/encryptwallet`, request);
  }

  getWalletInfo(): Observable<GetWalletInfoResponse> {
    return this.http.get<GetWalletInfoResponse>(`${BASE_URL}/getwalletinfo`);
  }

  getBalances(): Observable<GetBalancesResponse> {
    return this.http.get<GetBalancesResponse>(`${BASE_URL}/getbalances`);
  }
}
