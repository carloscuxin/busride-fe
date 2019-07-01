import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Own components
import { Dashboard as DashboardLayout } from '../../../layout/index';
import Table from '../../DataDisplay/Table';
import { Spinner } from '../../Feedback';

const Index = () => {
  const [data, setCompanies] = useState({});
  const [columns, setColumns] = useState({});
  const [ifGetData , setStatus] = useState(false);
  const [loading , setStatusLoading] = useState(true);
  const [loadInfo, changeLoad] = useState(true);
  const titleView = 'Companies';

  /**
   * Ejecuta las funciones correpondientes para cargar
   * la información de la vista
   * [28/06/2019]
  **/
  useEffect(() => {
    if(!loadInfo) return;

    /**
     * Obtiene la información de las compañias
     * [28/06/2019] / acuxin 
    **/
   const getInfo = async () => {
      const url = 'http://localhost:9000/vehicles';
      const res = await axios.get(url);
      setCompanies({ information: res.data });
      setStatus(true);
      setStatusLoading(false);
      changeLoad(false);
    };

    /**
     * Obtiene la las columnas de la tabla companies
     * [28/06/2019] / acuxin 
    **/
   const getColumns = async () => {
      const url = `http://localhost:9000/vehicles/columns/model`;
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