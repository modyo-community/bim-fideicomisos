import { DInput, DInputCheck } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';
 
export default function NewAccount() {
  const { t } = useTranslation();
  return (
    <div>

      <div className="row">
        <div className="col-6 mb-3">
          <DInput
            innerId="accountNumber"
            label="Ingresa tu número de cuenta"
            placeholder="XXXX XXXX XXXX XXXX"
            type="number"
            value=""
          />
      </div>
      <div className="col-6 mb-3">
        <div className="d-flex mt-3">
          <div className="me-3 mb-3 mt-4">
          <DInputCheck
              innerId="cuentaCOrrecta"
              label="La cuenta ingresada es correcta"
              type="checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
