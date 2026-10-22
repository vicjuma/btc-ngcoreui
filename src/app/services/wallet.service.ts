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
import { GetHdKeysRequest, GetHdKeysResponseItem } from '../types/get-hd-keys.interface';
import { DeriveHdKeyRequest, DeriveHdKeyResponse } from '../types/derive-hd-key.interface';
import {
  DeriveAddressesRequest,
  DeriveAddressesResponse,
} from '../types/derive-addresses.interface';
import { GetNewAddressRequest, GetNewAddressResponse } from '../types/get-new-address.interface';
import {
  GetRawChangeAddressRequest,
  GetRawChangeAddressResponse,
} from '../types/get-raw-change-address.interface';
import { GetAddressInfoRequest, GetAddressInfoResponse } from '../types/get-address-info.interface';
import {
  ListReceivedByAddressRequest,
  ListReceivedByAddressResponse,
} from '../types/list-received-by-address.interface';
import {
  ListReceivedByLabelRequest,
  ListReceivedByLabelResponse,
} from '../types/list-received-by-label.interface';
import {
  GetReceivedByAddressRequest,
  GetReceivedByAddressResponse,
} from '../types/get-received-by-address.interface';
import {
  GetReceivedByLabelRequest,
  GetReceivedByLabelResponse,
} from '../types/get-received-by-label.interface';
import { ListSinceBlockRequest, ListSinceBlockResponse } from '../types/list-since-block.interface';
import {
  ListTransactionsRequest,
  ListTransactionsResponse,
} from '../types/list-transactions.interface';

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

  deriveAddresses(request: DeriveAddressesRequest): Observable<DeriveAddressesResponse> {
    return this.http.post<DeriveAddressesResponse>(`${BASE_URL}/deriveaddresses`, request);
  }

  deriveHdKey(request: DeriveHdKeyRequest): Observable<DeriveHdKeyResponse> {
    return this.http.post<DeriveHdKeyResponse>(`${BASE_URL}/derivehdkey`, request);
  }

  encryptWallet(request: EncryptWalletRequest): Observable<EncryptWalletResponse> {
    return this.http.post<EncryptWalletResponse>(`${BASE_URL}/encryptwallet`, request);
  }

  getAddressInfo(request: GetAddressInfoRequest): Observable<GetAddressInfoResponse> {
    return this.http.post<GetAddressInfoResponse>(`${BASE_URL}/getaddressinfo`, request);
  }

  getBalances(): Observable<GetBalancesResponse> {
    return this.http.get<GetBalancesResponse>(`${BASE_URL}/getbalances`);
  }

  getHdKeys(request: GetHdKeysRequest = {}): Observable<GetHdKeysResponseItem[]> {
    return this.http.post<GetHdKeysResponseItem[]>(`${BASE_URL}/gethdkeys`, request);
  }

  getNewAddress(request: GetNewAddressRequest = {}): Observable<GetNewAddressResponse> {
    return this.http.post<GetNewAddressResponse>(`${BASE_URL}/getnewaddress`, request);
  }

  getRawChangeAddress(
    request: GetRawChangeAddressRequest = {},
  ): Observable<GetRawChangeAddressResponse> {
    return this.http.post<GetRawChangeAddressResponse>(`${BASE_URL}/getrawchangeaddress`, request);
  }

  getReceivedByAddress(
    request: GetReceivedByAddressRequest,
  ): Observable<GetReceivedByAddressResponse> {
    return this.http.post<GetReceivedByAddressResponse>(`${BASE_URL}/getreceivedbyaddress`, {
      address: request.address,
      minconf: request.minconf ?? 1,
      include_immature_coinbase: request.include_immature_coinbase ?? false,
    });
  }

  getReceivedByLabel(request: GetReceivedByLabelRequest): Observable<GetReceivedByLabelResponse> {
    return this.http.post<GetReceivedByLabelResponse>(`${BASE_URL}/getreceivedbylabel`, {
      label: request.label,
      minconf: request.minconf ?? 1,
      include_immature_coinbase: request.include_immature_coinbase ?? false,
    });
  }

  getWalletInfo(): Observable<GetWalletInfoResponse> {
    return this.http.get<GetWalletInfoResponse>(`${BASE_URL}/getwalletinfo`);
  }

  listDescriptors(privateProp = false): Observable<ListDescriptorsResponse> {
    return this.http.get<ListDescriptorsResponse>(`${BASE_URL}/listdescriptors`, {
      params: { private: privateProp },
    });
  }

  listReceivedByAddress(
    request: ListReceivedByAddressRequest = {},
  ): Observable<ListReceivedByAddressResponse[]> {
    return this.http.get<ListReceivedByAddressResponse[]>(`${BASE_URL}/listreceivedbyaddress`, {
      params: {
        minconf: request.minconf ?? 1,
        include_empty: request.include_empty ?? false,
        include_watchonly: request.include_watchonly ?? false,
        address_filter: request.address_filter ?? '',
        include_immature_coinbase: request.include_immature_coinbase ?? false,
      },
    });
  }

  listReceivedByLabel(
    request: ListReceivedByLabelRequest = {},
  ): Observable<ListReceivedByLabelResponse[]> {
    return this.http.get<ListReceivedByLabelResponse[]>(`${BASE_URL}/listreceivedbylabel`, {
      params: {
        minconf: request.minconf ?? 1,
        include_empty: request.include_empty ?? false,
        include_watchonly: request.include_watchonly ?? false,
        include_immature_coinbase: request.include_immature_coinbase ?? false,
      },
    });
  }

  listSinceBlock(request: ListSinceBlockRequest = {}): Observable<ListSinceBlockResponse> {
    return this.http.post<ListSinceBlockResponse>(`${BASE_URL}/listsinceblock`, {
      blockhash: request.blockhash,
      target_confirmations: request.target_confirmations ?? 1,
      include_watchonly: request.include_watchonly ?? false,
      include_removed: request.include_removed ?? true,
      include_change: request.include_change ?? false,
      label: request.label,
    });
  }

  listTransactions(request: ListTransactionsRequest = {}): Observable<ListTransactionsResponse[]> {
    return this.http.post<ListTransactionsResponse[]>(`${BASE_URL}/listtransactions`, {
      label: request.label,
      count: request.count ?? 10,
      skip: request.skip ?? 0,
      include_watchonly: request.include_watchonly ?? false,
    });
  }

  listWalletDir(): Observable<ListWalletDirResponse> {
    return this.http.get<ListWalletDirResponse>(`${BASE_URL}/listwalletdir`);
  }

  listWallets(): Observable<ListWalletsResponse> {
    return this.http.get<ListWalletsResponse>(`${BASE_URL}/listwallets`);
  }
}
