import React, { useEffect, useContext } from 'react';
// Own components
//import Labels from '../../helpers/labels/Labels';
import { Dashboard as DashboardLayout } from '../../layout/index';
import Contex from '../../store/Context';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions';
import Table from '../../components/datadisplay/Table';
import { Spinner } from '../../components/feedback';

const status = { loadInfo: true, isThereData: false };
const Index = () => {
  const [state, dispatch] = useContext(Contex);
  const stateVehicle = state.vehicle;
  
  /**
   * Ejecuta las funciones correpondientes para cargar
   * la información de la vista
   * [28/06/2019]
  **/
  useEffect(() => {
    if(!status.loadInfo) return;

    /**
     * Obtiene la información de los vehiculos
     * [28/06/2019] / acuxin 
    **/
    const getInfo = async() => {
      let vehicles = await actions.fetchVehicles();
      if (vehicles.type === actionTypes.FETCH_VEHICLES_FAIL) {
        if (vehicles.error === undefined) return;
        if (vehicles.error.status !== 404 && !vehicles.error.data.args) return;
        vehicles = {type: actionTypes.FETCH_VEHICLES_SUCCESS, vehicles: []}
      }
      status.isThereData = true;
      dispatch(vehicles);
    };
    
    /**
     * Obtiene la las columnas de la tabla vehiculos
     * [28/06/2019] / acuxin 
    **/
    const getColumns = async() => {
      const columns = await actions.fetchColumnsVehicle();
      if (columns.type === actionTypes.FETCH_COLUMNS_VEHICLES_FAIL) return;
      status.loadInfo = false;
      dispatch(columns);
    };

    (!status.isThereData) ? getInfo() : getColumns();
  }, [state, dispatch]);

  // Muestra el spinner o la información
  let component = <Spinner />;
  if (!status.loadInfo) {
    component = <Table data={stateVehicle.vehicles} columns={stateVehicle.columns[state.locale.language]} title={stateVehicle.titleView} />;
  }

  return (
    <DashboardLayout title={stateVehicle.titleView}>
      {component}
    </DashboardLayout>
  )
}

export default Index;