import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Own components
import { Dashboard as DashboardLayout } from '../../../layout/index';
import Table from '../../DataDisplay/Table';
import { Spinner } from '../../Feedback';

const Index = () => {
  const [data, setVehicles] = useState({});
  const [columns, setColumns] = useState({});
  const [ifGetData , setStatus] = useState(false);
  const [loading , setStatusLoading] = useState(true);
  const [loadInfo, changeLoad] = useState(true);
  const titleView = 'Vehicles';

  /**
   * Ejecuta las funciones correpondientes para cargar
   * la información de la vista
   * [28/06/2019]
  **/
  useEffect(() => {
    if(!loadInfo) return;

    /**
     * Obtiene la información de los vehiculos
     * [28/06/2019] / acuxin 
    **/
    const getInfo = async () => {
      const url = 'http://localhost:9000/vehicles';
      const res = await axios.get(url);
      setVehicles({ information: res.data });
      setStatus(true);
      setStatusLoading(false);
      changeLoad(false);
    };
    
    /**
     * Obtiene la las columnas de la tabla vehiculos
     * [28/06/2019] / acuxin 
    **/
    const getColumns = async () => {
      const url = `http://localhost:9000/vehicles/columnsTable`;
      const res = await axios.get(url);
      setColumns({ columns: res.data });
    };

    getInfo();
    if(!ifGetData) return;
    getColumns();
  }, [loadInfo, ifGetData]);

  // Muestra el spinner o la información
  const component = (loading) ? <Spinner /> : <Table data={data.information} columns={columns.columns} title={titleView} />;

  return (
    <DashboardLayout title={titleView}>
      {component}
    </DashboardLayout>
  )
}

export default Index;