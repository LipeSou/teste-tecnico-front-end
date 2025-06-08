"use client";
import { useState } from "react";

import { PropertyButton } from "@/components/common/property-button";
import { PropertyDialog } from "@/components/common/property-dialog";

type ReservationModalProps = {
  trigger: React.ReactNode;
  propertyTitle: string;
};

export function ReservationModal({
  trigger,
  propertyTitle,
}: ReservationModalProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleSimulate() {
    setIsConfirmed(true);
  }

  return (
    <PropertyDialog
      trigger={trigger}
      title={`Reserva`}
      description={`Faça sua reserva para "${propertyTitle}".`}
      showClose
      onOpenChange={(open: boolean) => {
        if (!open) setIsConfirmed(false);
      }}
    >
      {isConfirmed ? (
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-green-600 text-xl font-bold"
            role="status"
            aria-live="polite"
          >
            Reserva feita com sucesso!
          </span>
        </div>
      ) : (
        <div>
          <p className="mb-4">
            Clique em <strong>Fazer reserva</strong> e será realizada uma
            simulação de reserva.
          </p>
          <PropertyButton
            fullWidth
            type="button"
            aria-label="Fazer reserva"
            onClick={handleSimulate}
            className="mt-2"
          >
            Fazer Reserva
          </PropertyButton>
        </div>
      )}
    </PropertyDialog>
  );
}
