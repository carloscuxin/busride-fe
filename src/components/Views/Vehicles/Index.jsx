import React, { useState, useEffect } from 'react'
import Table from '../../DataDisplay/Table';
import Dashboard from '../../../layout/Dashboard/Dashboard';

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
    <Dashboard title="Vehicles">
      <Table data={state} />
    </Dashboard>
  )
}

export default Index;