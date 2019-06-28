import React from 'react';
import MaterialTable from 'material-table';

const Table = ({data}) => {
	return (
    <MaterialTable
      title={data.title}
      columns={data.columns}
      data={data.information}
      options={{ selection: true }}
      actions={[
        {
          tooltip: 'Remove All Selected',
          icon: 'delete',
          onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
        }
      ]}
    />
	)
}

export default Table;