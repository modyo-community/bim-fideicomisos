import { useState } from 'react';
import { DInputSelect, DInput, DInputCheck, DButton, useModalContext  } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';
 
import ExistingAccount from './ExistingAccount';
import NewAccount from './NewAccount';

export default function FideicomisoForm(props: any) {
  const { t } = useTranslation();
  
  const { openModal } = useModalContext();

  let { selected } = props;

  const type = [
    {
      label: 'Traspaso entre cuentas',
      value: 'traspaso-entre-cuentas'
    },
    {
      label: 'Otro',
      value: 'BIM'
    }
  ]

  const accounts= [
    {value: '0987654321', label: '0987654321'},
    {value: '1234567890', label: '1234567890'},
    {value: '5678901234', label: '5678901234'}
  ];

  const ammounts= [
    {value: '10,000', label: '$10,000.00'},
    {value: '20,000', label: '$20,000.00'},
    {value: '30,000', label: '$30,000.00'},
    {value: '40,000', label: '$40,000.00'},
  ];

  const [selectedDestination, setSelectedDestination] = useState('existing');
  
  const changeExistingDestination = (item: any) => {
    setSelectedDestination('existing');
  };

  const changeNewgDestination = (item: any) => {
    setSelectedDestination('new');
  };

  return (
    <div>
      <p className="fs-5 mb-3 pb-3 border-bottom text-primary">Nueva Institución</p>
      <p className="label mb-3 small text-muted fw-bold">Selecciona una opción</p>
      <div className="d-flex">
        <div className="me-3 mb-3">
        <DInputCheck
            innerId="monetaria"
            label="Monetaria"
            isChecked
            type="radio"
            name="opcion"
          />
        </div>
        <div className="me-3 mb-3">
          <DInputCheck
            innerId="noMonetaria"
            label="No Monetaria"
            type="radio"
            name="opcion"
          />
          </div>
      </div>
      <div className="row">
          <div className="col-6 mb-4">
          <DInput
            innerId="inputNumber"
            label="Número de fideicomiso"
            isDisabled
            placeholder=""
            type="text"
            value= { selected.id }
          />
        </div>
        <div className="col-6 mb-4">
          <DInput
            innerId="inputAlias"
            label="Alias (Nombre de fideicomiso)"
            isDisabled
            placeholder=""
            type="text"
            value= { selected.alias }
          />
        </div>
      </div>
      <div>
        <DInputSelect
          innerId="selectType"
          label="Tipo de instrucción"
          onEventBlur={function noRefCheck(){}}
          onEventChange={function noRefCheck(){}}
          onEventIconEndClick={function noRefCheck(){}}
          onEventIconStartClick={function noRefCheck(){}}
          options={type}
        />
      </div>
      <p className="label mt-4 mb-3 small text-muted fw-bold">Cuenta abono</p>
      <div className="d-flex mt-3">
        <div className="me-3 mb-3">
        <DInputCheck
            innerId="existente"
            label="Cuenta existente"
            isChecked
            type="radio"
            name="accountDestiny"
            onEventChange={(newValue) => changeExistingDestination(newValue)}
          />
        </div>
        <div className="me-3 mb-3">
          <DInputCheck
            innerId="nueva"
            label="Nueva"
            type="radio"
            name="accountDestiny"
            onEventChange={(newValue) => changeNewgDestination(newValue)}
          />
          </div>
      </div>
      {selectedDestination == 'existing' ? <ExistingAccount /> : null}
      {selectedDestination == 'new' ? <NewAccount /> : null}
      <div className="d-flex gap-3">
        <DButton text="Enviar" theme="secondary" onEventClick={() => openModal('modal')} />
        
        <DButton
          onEventClick={function noRefCheck(){}}
          text="Cancelar"
          theme="primary"
          type="button"
        />
      </div>
    </div>
  );
}
