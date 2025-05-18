import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

export interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}
export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate.toFixed(2)}%</strong>
      </p>
    </div>
  );
}
