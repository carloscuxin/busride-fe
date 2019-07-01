import React from 'react';
import MaterialTable from 'material-table';

const Table = (props) => {
	return (
    <MaterialTable
      title={props.title}
      columns={props.columns}
      data={props.data}
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