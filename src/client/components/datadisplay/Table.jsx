import React from 'react';
import MaterialTable from 'material-table';
import { injectIntl } from 'react-intl';
//Own components
import { Labels } from '../../helpers/messages';

const Table = (props) => {
  const labels = {
    searchPlaceholder: props.intl.formatMessage({id: 'label.table.searchTooltip'}),
    rows: props.intl.formatMessage({id: 'label.table.rows'}),
    of: props.intl.formatMessage({id: 'label.table.of'}),
  }

  //Agregar registro
  const addData = {
    icon: 'add_box',
    tooltip: Labels.general.table.addElement,
    isFreeAction: true,
    onClick: (e) => props.handleOpenDialog(e)
  }
  //Editar registro
  const editData={
    tooltip: 'Edit',
    icon: 'edit',
    onClick: (evt, data) => console.log(evt, data)
  }
  //Eliminar registro(s)
  const deleteData = {
    tooltip: 'Remove All Selected Users',
    icon: 'delete',
    onClick: (evt, data) => console.log(evt, data)
  }
  //Traducciones
  const localization = {
    body: {
      emptyDataSourceMessage: Labels.general.table.noResults
    },
    toolbar: {
      searchTooltip: Labels.general.table.searchTooltip,
      searchPlaceholder: labels.searchPlaceholder
    },
    pagination: {
      labelRowsSelect: labels.rows,
      labelDisplayedRows: `{from}-{to} ${labels.of} {count}`,
      firstTooltip: Labels.general.table.firstPage,
      previousTooltip: Labels.general.table.previousPage,
      nextTooltip: Labels.general.table.nextPage,
      lastTooltip: Labels.general.table.lastPage,
    }
  }

	return (
    <MaterialTable
      title={props.title}
      columns={props.columns}
      data={props.data}
      options={{selection: true}}
      actions={[addData, editData, deleteData]}
      localization={localization}
    />
  );
}

export default injectIntl(Table);