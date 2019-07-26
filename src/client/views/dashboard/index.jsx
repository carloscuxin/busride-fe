import React from 'react';
// Own components
import { Labels } from '../../helpers/messages';
//import Table from '../../DataDisplay/Table';
import { useAuth } from '../../../server/services/authentication';
import { Dashboard as DashboardLayout } from '../../layout/index';


const Index = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <DashboardLayout title={Labels.general.titlesViews.dashboard}>

    </DashboardLayout>
  )
}

export default Index;