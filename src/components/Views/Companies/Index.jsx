import React, { useState, useEffect } from 'react'
import Table from '../../DataDisplay/Table';
import { Dashboard as DashboardLayout } from '../../../layout/index';

const Index = () => {
  const [state, getCompanies] = useState({
    information: [],
    columns: []
  });

  useEffect(() => {
    const getInfo = async () => {
      const url = 'http://localhost:9000/companies';
      const resp = await fetch(url);
      const companies = await resp.json();
      
      getCompanies({ information: companies[0], columns: companies[1], title: "Companies" });
    };

    getInfo();
  }, []);

  return (
    <DashboardLayout title="Companies">
      <Table data={state} />
    </DashboardLayout>
  )
}

export default Index;