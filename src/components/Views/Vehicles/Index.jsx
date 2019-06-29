import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Own components
import { Dashboard as DashboardLayout } from '../../../layout/index';
import Table from '../../DataDisplay/Table';

const Index = () => {
  const [columns, setColumns] = useState({});
  const [data, setVehicles] = useState({});
  const [title, setTitle] = useState('');
  const [ifgetData , setStatus] = useState(false);

  useEffect(() => {
    getInfo();
    getColumns('Vehicle');
  }, [ifgetData]);

  const getInfo = async () => {
    try {
      const url = 'http://localhost:9000/vehicles';
      const res = await axios(url);
      console.log(res);
      setVehicles({ information: res.data });
      setStatus(true);
    }catch (err){
      console.log(err);
    }
  };

  const getColumns = async model => {
    try {
      const url = `http://localhost:9000/vehicles/columns/model`;
      const res = await axios(url);
      console.log(res);
      setColumns({ columns: res.data });
      setTitle('Vehicles');
    }catch (err){
      console.log(err);
    }
  };

  return (
    <DashboardLayout title="Vehicles">
      <Table data={data.information} columns={columns.columns} title={title} />
    </DashboardLayout>
  )
}

export default Index;