import React from 'react';
import { FormattedMessage } from "react-intl";

const Labels = {
  //-- General --//
  general: {
    titlesViews: {
      dashboard: <FormattedMessage id="label.title.dashboard" defaultMessage="Panel" />,
      vehicles: <FormattedMessage id="label.title.vehicles" defaultMessage="Vehiculos" />,
      companies: <FormattedMessage id="label.title.companies" defaultMessage="Compañias" />
    },
    forms: {
      tooltips: {
        //addElement: <FormattedMessage id="tooltip.form.add" defaultMessage="Añadir Elemento" />,
      },
    },
    labelsButton: {
      agree: <FormattedMessage id="label.buttons.agree" defaultMessage="De Acuerdo" />,
      save: <FormattedMessage id="label.buttons.save" defaultMessage="Guardar" />,
      cancel: <FormattedMessage id="label.buttons.cancel" defaultMessage="Cancelar" />,
      edit: <FormattedMessage id="label.buttons.edit" defaultMessage="Editar" />,
    },
    validations: {
      errors: {
        required: <FormattedMessage id="label.error.required" defaultMessage="El campo es requerido" />,
        onlyNumbers: <FormattedMessage id="label.error.onlyNumbers" defaultMessage="El campo solo puede contener números" />,
        notNull: <FormattedMessage id="label.error.notNull" defaultMessage="El campo no puede ser nulo" />,
        length: <FormattedMessage id="label.error.length" defaultMessage="El campo debe tener una longitud entre {minLength} y {maxLength}" values={{}} />,
        email: <FormattedMessage id="label.error.email" defaultMessage="El correo no es válido" />,
      },
    },
    table: {
      noResults: <FormattedMessage id="label.table.noResults" defaultMessage="No hay registros para mostrar" />,
      searchTooltip: <FormattedMessage id="label.table.searchTooltip" defaultMessage="Buscar" />,
      firstPage: <FormattedMessage id="label.table.firstPage" defaultMessage="Primera Página" />,
      previousPage: <FormattedMessage id="label.table.previousPage" defaultMessage="Página Anterior" />,
      nextPage: <FormattedMessage id="label.table.nextPage" defaultMessage="Página Siguiente" />,
      lastPage: <FormattedMessage id="label.table.lastPage" defaultMessage="Ultima Página" />,
      addElement: <FormattedMessage id="tooltip.table.add" defaultMessage="Añadir Elemento" />,
    }
  },
  //-- Topbar --//
  topbar:{
    menuLanguage: {
      tooltip: <FormattedMessage id="tooltip.language.dashboard" defaultMessage="" />,
      labelSpanish: <FormattedMessage id="label.spanish.dashboard" defaultMessage="Español" />,
      labelEnglish: <FormattedMessage id="label.english.dashboard" defaultMessage="Ingles" />,
      labelGerman: <FormattedMessage id="label.german.dashboard" defaultMessage="Alemán" />
    },
  },
  //-- Sidebar --//
  sidebar:{
    titlesMenu: {
      dashboard: <FormattedMessage id="label.sidebar.dashboard" defaultMessage="Panel" />,
      vehicles: <FormattedMessage id="label.sidebar.vehicles" defaultMessage="Vehiculos" />,
      companies: <FormattedMessage id="label.sidebar.companies" defaultMessage="Compañias" />,
      customerSupport: <FormattedMessage id="label.sidebar.customerSupport" defaultMessage="Atención al Cliente" />,
    },
    titleSections: {
      support: <FormattedMessage id="label.sidebar.sections.support" defaultMessage="Soporte" />,
    },
  },
  //-- Companies --//
  companies: {
    forms: {
      labels: {
        businessName: <FormattedMessage id="label.forms.companies.bussinesName" defaultMessage="Nombre Legal" />,
        commercialName: <FormattedMessage id="label.forms.companies.commercialName" defaultMessage="Nombre Comercial" />,
        phone: <FormattedMessage id="label.forms.companies.phone" defaultMessage="Teléfono" />,
        email: <FormattedMessage id="label.forms.companies.email" defaultMessage="Correo" />,
        webPage: <FormattedMessage id="label.forms.companies.webPage" defaultMessage="Página Web" />,
        addCompany: <FormattedMessage id="label.forms.companies.add" defaultMessage="Agregar Compañia" />,
      },
    },
  },
};

export default Labels;