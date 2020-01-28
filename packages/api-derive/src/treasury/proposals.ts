// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ProposalIndex, TreasuryProposal } from '@polkadot/types/interfaces';
import { DerivedTreasuryProposal, DerivedTreasuryProposals } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { createType, Option } from '@polkadot/types';

import { memo } from '../util';

interface Result {
  allIds: ProposalIndex[];
  allProposals: Option<TreasuryProposal>[];
  approvalIds: ProposalIndex[];
  proposalCount: ProposalIndex;
}

function parseResult (_api: ApiInterfaceRx, { allIds, allProposals, approvalIds, proposalCount }: Result): DerivedTreasuryProposals {
  const approvals: DerivedTreasuryProposal[] = [];
  const proposals: DerivedTreasuryProposal[] = [];

  allIds.forEach((id, index): void => {
    if (allProposals[index].isSome) {
      const isApproval = approvalIds.some((approvalId): boolean => approvalId.eq(id));
      const derived = { id, proposal: allProposals[index].unwrap() };

      if (isApproval) {
        approvals.push(derived);
      } else {
        proposals.push(derived);
      }
    }
  });

  return { approvals, proposalCount, proposals };
}

function retrieveProposals (api: ApiInterfaceRx, proposalCount: ProposalIndex, approvalIds: ProposalIndex[]): Observable<DerivedTreasuryProposals> {
  const proposalIds: ProposalIndex[] = [];
  const count = proposalCount.toNumber();

  for (let index = 0; index < count; index++) {
    const isApproval = approvalIds.some((id): boolean => id.eqn(index));

    if (!isApproval) {
      proposalIds.push(createType(api.registry, 'ProposalIndex', index));
    }
  }

  const allIds = [...proposalIds, ...approvalIds];

  return combineLatest([
    api.query.treasury.proposals.multi<Option<TreasuryProposal>>(allIds)
  ]).pipe(
    map(([allProposals]: [Option<TreasuryProposal>[]]): DerivedTreasuryProposals =>
      parseResult(api, { allIds, allProposals, approvalIds, proposalCount })
    )
  );
}

/**
 * @description Retrieve all active and approved treasury proposals, along with their info
 */
export function proposals (api: ApiInterfaceRx): () => Observable<DerivedTreasuryProposals> {
  return memo((): Observable<DerivedTreasuryProposals> =>
    api.query.treasury
      ? combineLatest([
        api.query.treasury.proposalCount(),
        api.query.treasury.approvals()
      ]).pipe(
        switchMap(([proposalCount, approvalIds]: [ProposalIndex, ProposalIndex[]]) =>
          retrieveProposals(api, proposalCount, approvalIds)
        )
      )
      : of({
        approvals: [],
        proposalCount: createType(api.registry, 'ProposalIndex'),
        proposals: []
      } as DerivedTreasuryProposals)
  );
}
