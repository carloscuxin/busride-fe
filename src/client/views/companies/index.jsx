import React, { useState, useEffect, useContext } from 'react';
// Own components
import { Dashboard as DashboardLayout } from '../../layout/index';
import Labels from '../../helpers/labels/Labels';
import Contex from '../../store/Context';
import ResponsiveDialog from '../../components/feedback/ResponsiveDialog';
import * as actionTypes from '../../store/actions/actionTypes';
import * as typesValidate from '../../helpers/validate/typesValidate';
import * as actions from '../../store/actions';
import { Spinner } from '../../components/feedback';
import Table from '../../components/datadisplay/Table';
import NewCompany from './NewCompany';
import Validate from '../../helpers/validate';

const status = { loadInfo: true, isThereData: false };

const Index = () => {
  const [state, dispatch] = useContext(Contex);
  const [company, setCompany] = useState({});
  const [validations, setValidations] = useState({
    model: 'Company',
    type: typesValidate.VALIDATE_FORM,
    errors: {
      args: false,
      visibility: 'hidden',
      data: null
    }
  });
  const [open, setOpen] = useState(false);
  const [spinnerData, changeSpinner ] = useState(false);
  const stateCompany = state.company;
  
  // ========================================================================================== //
  // FUNCIONES
  // ========================================================================================== //

  /**
   * Ejecuta las funciones correpondientes para cargar
   * la información de la vista
   * [28/06/2019]
  **/
  useEffect(() => {
    if(!status.loadInfo) return;

    /**
     * Obtiene la información de las compañias
     * [28/06/2019] / acuxin 
    **/
    const getInfo = async () => {
      let companies = await actions.fetchCompanies();
      if (companies.type === actionTypes.FETCH_COMPANIES_FAIL) {
        if (companies.error === undefined) return;
        if (companies.error.status !== 404 && !companies.error.data.args) return;
        companies = {type: actionTypes.FETCH_COMPANIES_SUCCESS, companies: []}
      }
      status.isThereData = true;
      dispatch(companies);
    };

    /**
     * Obtiene la las columnas de la tabla companies
     * [28/06/2019] / acuxin 
    **/
    const getColumns = async () => {
      const columns = await actions.fetchColumnsCompany();
      if (columns.type === actionTypes.FETCH_COLUMNS_COMPANIES_FAIL) return;
      status.loadInfo = false;
      dispatch(columns);
    };

    (!status.isThereData) ? getInfo() : getColumns();
  }, [state, dispatch]);

  // Abre el dialog del formulario
  const handleOpenDialog = (e) => setOpen(true);

  // Cierra el dialog del formulario y vacia el state company y reinica los errores
  const handleCloseDialog = () => { 
    setOpen(false);
    setCompany({});
    resetValidations();
  }

  /**
   * Obtiene la información del formulario para registrar una compañia
   * y la guarda en el state
   * [10/07/2019]
  **/
  const getDataCompany = e => setCompany({...company, [e.target.name]: e.target.value.trim()});

  /**
   * Manda a aguardar la compañia a la base de datos
   * y la agrega al state global
   * [11/07/2019]
  **/
  const addCompany = () => {
    const errors = Validate(validations, company);
    //Si hay errores los muestra y termina 
    if (errors.length !== 0) {
      setValidations({...validations, errors: {
        args: true,
        visibility: 'visible',
        data: errors
      }});
      return;
    }

    //En caso de no haber errores resetea las validaciones y manda a guardar
    resetValidations();
    saveCompany(company)
  }

  const saveCompany = async data => {
    changeSpinner(true);
    const company = await actions.insertCompany(data)
    if (company.type === actionTypes.SET_COMPANY_FAIL) return;
    changeSpinner(false);
    handleCloseDialog();
    dispatch(company);
  };
  
  /**
   * Función que reseta las validaciones del formulario
   * [11/07/2019]
  **/
  const resetValidations = () => {
    setValidations({...validations,
      errors: {
        args: false,
        visibility: 'hidden',
        data: null
      }
    });
  }

  // ========================================================================================== //
  // RENDERIZACION DE LOS COMPONENTES
  // ========================================================================================== //
  
  // Muestra el spinner o la información
  const component = (status.loadInfo) ? <Spinner /> : 
  <Table data={stateCompany.companies} columns={stateCompany.columns[state.locale.language]} title={stateCompany.titleView} handleOpenDialog={handleOpenDialog} />;

  //guarda el content del dialog
  const contentDialog = (spinnerData) ? <Spinner /> :
  <NewCompany getDataCompany={() => getDataCompany} errors={validations.errors} />;

  //guarda el dialog con el form o el spinner
  const formDialogCompany = (
    <ResponsiveDialog 
      open={open}
      handleCloseDialog={() => handleCloseDialog}
      actionAgree={() => addCompany}
      title={Labels.companies.forms.labels.addCompany}
      cancelButton={Labels.general.labelsButton.cancel}
      agreeButton={Labels.general.labelsButton.save}
      maxWidth="md"
      maxHeight="350px"
    >
      {contentDialog}
    </ResponsiveDialog>
  );

  return (
    <DashboardLayout title={stateCompany.titleView}>
      {component}
      {formDialogCompany}
    </DashboardLayout>
  )
}

export default Index;