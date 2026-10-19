import { inject, Injectable } from '@angular/core';
import { CreateWalletRequest, CreateWalletResponse } from '../types/create-wallet.interface';
import { BASE_URL } from '../types/constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EncryptWalletRequest, EncryptWalletResponse } from '../types/encrypt-wallet.interface';
import { GetWalletInfoResponse } from '../types/get-wallet-info.interface';
import { GetBalancesResponse } from '../types/get-balances.interface';
import { ListWalletsResponse } from '../types/list-wallets.interface';
import { ListWalletDirResponse } from '../types/list-wallet-dir.interface';
import {
  CreateWalletDescriptorRequest,
  CreateWalletDescriptorResponse,
} from '../types/create-wallet-descriptor.interface';
import { ListDescriptorsResponse } from '../types/list-descriptors.interface';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private readonly http = inject(HttpClient);

  createWallet(request: CreateWalletRequest): Observable<CreateWalletResponse> {
    return this.http.post<CreateWalletResponse>(`${BASE_URL}/createwallet`, request);
  }

  createWalletDescriptor(
    request: CreateWalletDescriptorRequest,
  ): Observable<CreateWalletDescriptorResponse> {
    return this.http.post<CreateWalletDescriptorResponse>(
      `${BASE_URL}/createwalletdescriptor`,
      request,
    );
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

  listDescriptors(privateProp = false): Observable<ListDescriptorsResponse> {
    return this.http.get<ListDescriptorsResponse>(`${BASE_URL}/listdescriptors`, {
      params: { private: privateProp },
    });
  }

  listWallets(): Observable<ListWalletsResponse> {
    return this.http.get<ListWalletsResponse>(`${BASE_URL}/listwallets`);
  }

  listWalletDir(): Observable<ListWalletDirResponse> {
    return this.http.get<ListWalletDirResponse>(`${BASE_URL}/listwalletdir`);
  }
}
