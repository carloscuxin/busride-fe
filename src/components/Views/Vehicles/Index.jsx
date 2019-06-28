import React, { useState, useEffect } from 'react'
import Table from '../../DataDisplay/Table';
import { Dashboard as DashboardLayout } from '../../../layout/index';

const Index = () => {
  const [state, getVehicles] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      try {
        const url = 'http://localhost:9000/vehicles';
        const resp = await fetch(url);
        const vehicles = await resp.json();
   
        getVehicles({ information: vehicles[0], columns: vehicles[1], title: "Vehicles" });
      } catch (err) {
        console.log(err); 
      }
    };
    
    getInfo();
  }, []);

  

  return (
    <DashboardLayout title="Vehicles">
      <Table data={state} />
    </DashboardLayout>
  )
}

export default Index;