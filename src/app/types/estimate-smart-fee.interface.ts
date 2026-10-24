export interface EstimateSmartFeeRequest {
  conf_target: number;
  estimate_mode?: 'unset' | 'economical' | 'conservative';
  options?: EstimateSmartFeeOptions;
}

export interface EstimateSmartFeeOptions {
  fee_rate_estimator?: 'auto' | 'block_policy' | 'mempool_policy';
  verbosity?: number;
}

export interface EstimateSmartFeeResponse {
  feerate?: number;
  estimator?: string;
  errors?: string[];
  blocks: number;
  mempool_health_statistics?: MempoolHealthStatistic[];
}

export interface MempoolHealthStatistic {
  block_height: number;
  block_weight: number;
  mempool_txs_weight: number;
}
