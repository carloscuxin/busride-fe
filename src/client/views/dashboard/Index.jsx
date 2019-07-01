import React from 'react'
//import Table from '../../DataDisplay/Table';
import { Dashboard as DashboardLayout } from '../../../layout/index';
import { FullScreenDialog } from '../../Feedback';

const Index = () => {
  return (
    <DashboardLayout title="Dashboard">
      <FullScreenDialog />
    </DashboardLayout>
  )
}

export default Index;