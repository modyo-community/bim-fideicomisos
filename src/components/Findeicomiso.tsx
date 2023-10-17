import { useState } from 'react';
import { DInputSelect, DInput } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import FideicomisoForm from './FideicomisoForm';

import NoFideicomisoSelected from './NoFideicomisoSelected';

export default function Findeicomiso() {
  const { t } = useTranslation();
  
  const fideicomisos = [
    {id: '', name: '', alias: ''},
    {id: '3214394132', name: 'KYO - COSTELLA', alias: 'Fideicomiso 1'},
    {id: '9867324534', name: 'Modyo', alias: 'Fideicomiso 2'},
    {id: '4354232543', name: 'BIM', alias: 'Fideicomiso 3'}
  ];

  const [selectedFideicomiso, setSelectedFideicomiso] = useState({id: '', name: '', alias: ''});
  
  const changeFideicomiso = (item: any) => {
    const selectedFideicomiso = item.detail;
    setSelectedFideicomiso(selectedFideicomiso);
  };

  return (
    <div>
      <div className="row mb-8">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <div className="p-4 bg-white w-100 rounded-2 shadow-sm">
            <p className="fs-5 mb-3 pb-3 border-bottom text-primary custom1">Fideicomisos</p>
            <div className="mb-4">
            <DInputSelect
              innerId="selectFideicomiso"
              label="Selecciona el fideicomiso"
              onEventChange={(newValue) => changeFideicomiso(newValue)}
              options={fideicomisos}
              labelExtractor={(item: any) => item?.id}
              valueExtractor={(item: any) => item?.name}
            />
            </div>
            <div>
              <DInput
                innerId="inputName"
                label="Nombre del fideicomiso"
                isDisabled
                placeholder=""
                type="text"
                value={ selectedFideicomiso.name }
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="p-4 bg-white w-100 rounded-2 shadow-sm">
          {selectedFideicomiso.name.length == 0 ? <NoFideicomisoSelected /> : null}
          {selectedFideicomiso.name.length > 1 ? <FideicomisoForm selected={ selectedFideicomiso }/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
