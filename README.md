# @lp-labs/logistic-curve

Stable configurable logistic curve and analytic derivative.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/logistic-curve
```

## Working example

```js
import { logistic, logisticDerivative } from '@lp-labs/logistic-curve';
if (logistic(0) !== 0.5 || logisticDerivative(0) !== 0.25) throw new Error('Curve');
```

CommonJS: `const api = require('@lp-labs/logistic-curve')`.

## Behavior, customization and limits

logistic(x,midpoint=0,rate=1) and logisticDerivative use finite parameters within[-1e100,1e100]. Returns1/(1+exp(-rate*(x-midpoint))); negative rates allowed,zero rate constant0.5. Exponential underflow saturates0/1 explicitly; derivative rate*p*(1-p),but stable complementary exponential form preserves tails when p rounds1. Constant time. No fitting or statistical inference.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function logistic(x: number, midpoint?: number, rate?: number): number;
export declare function logisticDerivative(x: number, midpoint?: number, rate?: number): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
