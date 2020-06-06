import React from "react";

import { TableDataCell, TableRow } from "./HighScores.style";

export default ({ record, rank }) => (
  <>
    <TableRow key={record.key}>
      <TableDataCell> {rank + 1}</TableDataCell>
      <TableDataCell>
        {" "}
        {record.name} 
      </TableDataCell>
      <TableDataCell>
        {" "}
        {record.score} 
      </TableDataCell>
    </TableRow>
  </>
);
