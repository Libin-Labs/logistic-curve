import { logistic, logisticDerivative } from '@lp-labs/logistic-curve';
if (logistic(0) !== 0.5 || logisticDerivative(0) !== 0.25) throw new Error('Curve');
// @ts-expect-error invalid argument must be rejected by declarations
logistic('0');
