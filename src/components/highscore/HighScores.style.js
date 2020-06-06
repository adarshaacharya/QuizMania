import styled from "styled-components";
import { Container } from "../../@quiz-ui";

export const HighScoreContainer = styled(Container)`
  max-height: 100%;
  max-width: 90rem;
  margin: 70px auto;
`;

export const TableContainer = styled.table`
  border-collapse: collapse;
  max-width: 800px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 500px) {
    max-width: 350px;
  }
`;

export const TableBody = styled.tbody``;

export const TableHead = styled.thead``;

export const TableHeadCell = styled.th`
  color: var(--light-color);
  background: var(--dark-color);
  border-bottom: 4px solid #9ea7af;
  border-top : 4px solid var(--light-color);
  font-weight: 500;
  padding: 2rem;
  text-align: center;

  &:first-child {
    border-top-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-right: none;
  }

  @media screen and (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

export const TableRow = styled.tr`
  border-top: 1px solid var(--table-border-color);
  border-bottom: 1px solid var(--table-border-color);
  font-size: 16px;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  transition: all 0.3s ease;

  &:hover td {
    background: #4e5066;
    color: var(--light-color);
    border-top: 1px solid var(--dark-color);
  }
`;

export const TableDataCell = styled.td`
  background: #dadada;
  padding: 12px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 18px;
  border-right: 1px solid var(--table-border-color);

  &:last-child {
    border-right: 0px;
  }
`;
