# 0.37.1

api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derivates like was included in api-observable into the base.

Tuples now return single types when only one type is available, i.e. `(AccountId)` would now resolve as `AccountId`. The extra type wrapper adds no benefit to users here.

# 0.36.1

Api Promise has been updated in the way we deal with subscriptions. Previously a subscription returned `Promise<number>` where the caller was to keep track of the id and use it in subsequent unsubscribes. Now any subscriptions return an unsubscribe/destroy function `(): void`, that is use for removing the subscriptions, e.g.

```js
const unsubscribe = api.query.balance.freeBalance(Alice, (balance) => {...});

unsubscribe(); // here we destroy the subscription
```

# 0.35.1

Swapped to new metadata structures from Substrate. If the API is not working with your node, update Substrate to latest master branch. (Or 0.9.1 for Charred Cherry). Dropped support for old metadata as found as far back as BBQ Birch.

# 0.34.1

Changed the send signature (for future expansion of eg. events) to return `result: { status: ExtrinsicStatus }` instead of `status: ExtrinsicStatus`. For most cases where only status `type` checks are used, i.e. `status.type === 'Finalised'` this should not be a breaking change. Deep inspection of the status object however will need to adapt.