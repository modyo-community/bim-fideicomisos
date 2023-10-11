import { DInputSelect, DInput, DInputCheck } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';
 
export default function ExistingAccount() {
  const { t } = useTranslation();

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

  return (
    <div>
      <div className="row">
        <div className="col-6 mb-3">
          <DInputSelect
            innerId="selectAccount"
            label="Selecciona cuenta"
            onEventChange={ function changeFideicomiso(){console.log(event)} }
            options={accounts}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6 mb-3">
          <DInputSelect
            innerId="selectAmmount"
            label="Monto de la operación"
            onEventChange={ function changeFideicomiso(){console.log(event)} }
            options={ammounts}
          />
      </div>
      <div className="col-6 mb-3">
      <p className="label mb-3 small text-muted fw-bold">Tipo de Moneda</p>
        <div className="d-flex mt-3">
          <div className="me-3 mb-3">
          <DInputCheck
              innerId="MXN"
              label="MXN"
              isChecked
              type="radio"
              name="currency"
            />
          </div>
          <div className="me-3 mb-3">
            <DInputCheck
              innerId="USD"
              label="USD"
              type="radio"
              name="currency"
            />
          </div>
        </div>
      </div>
    </div>
      <div className="row">
        <div className="col-6 mb-3">
          <DInput
            innerId="inputReference"
            label="Referencia (Opcional)"
            placeholder=""
            type="text"
            value=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <DInput
            innerId="inputMessage"
            label="Ingresa un comentario"
            placeholder=""
            type="text"
            value=""
          />
        </div>
      </div>
    </div>
  );
}
