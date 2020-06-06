import React from "react";

import {
  TableHead,
  TableRow,
  TableBody,
  TableHeadCell,
} from "./HighScores.style";
import HighScoreDetail from "./HighScoreDetail";

export default function HighScoreList({ scores }) {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableHeadCell>Ranking</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Score</TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {scores.map((record, rank) => (
          <HighScoreDetail record={record} rank={rank} />
        ))}
      </TableBody>
    </>
  );
}
