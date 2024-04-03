import * as React from 'react';

export interface Item {
  id: string;
  name: string;
  propertyValue: boolean;
}

export interface TableProps {
  data?: Item[];
}

export const Table = React.memo((props: TableProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Column Name</th>
          <th>Disable Sorting</th>
        </tr>
      </thead>
      <tbody>
        {props.data?.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.propertyValue.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
});
Table.displayName = 'Table';
