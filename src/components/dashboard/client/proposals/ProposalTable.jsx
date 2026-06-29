"use client";

import useAcceptProposal from "@/hooks/useAcceptProposal";

export default function ProposalTable({ proposals }) {
  const { mutate } = useAcceptProposal();

  if (!proposals.length) {
    return (
      <div className="rounded-2xl border bg-white py-14 text-center">
        No proposals yet.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-white">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>

              <th>Bid</th>

              <th>Cover Letter</th>

              <th>Status</th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {proposals.map((proposal) => (
              <tr key={proposal._id}>
                <td>{proposal.freelancer_name}</td>

                <td>${proposal.bid_amount}</td>

                <td>{proposal.cover_letter}</td>

                <td className="capitalize">{proposal.status}</td>

                <td>
                  {proposal.status === "pending" && (
                    <button
                      onClick={() => mutate(proposal._id)}
                      className="rounded-lg bg-green-600 px-4 py-2 text-white"
                    >
                      Accept
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
