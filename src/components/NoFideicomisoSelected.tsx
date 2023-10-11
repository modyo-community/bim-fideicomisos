import { useState } from 'react';
import { useTranslation } from 'react-i18next';
 
export default function NoFideicomisoSelected() {
  const { t } = useTranslation();

  return (
    <div className="h-100 align-items-center justify-content-center py-8">
     <h5 className="text-center fw-bold text-primary">Seleccione un fideicomiso para comenzar</h5>
     <p className="text-center text-muted mt-2">Utilice el select en la columna izquierda para seleccionar un fideicomiso</p>
    </div>
  );
}
