export const ESTADOS_CARGA = {
  PUBLICADA: 1,
  RECLAMADA: 2,
  EN_CURSO: 3,
  FINALIZADA: 4,
  PAUSADA: 5,
  CANCELADA: 6,
} as const;

export type CargaEstadoId = (typeof ESTADOS_CARGA)[keyof typeof ESTADOS_CARGA];

export type CargaTipo = {
  id: number;
  nombre: string;
  fyhAlta: Date;
};

export type Carga = {
  id: number;
  pesoKg: number;
  volumenMtsCubicos: number;
  altoMts: number;
  anchoMts: number;
  largoMts: number;
  costo: number;
  codigoEntrega: string;
  fyhEntregaEstimada: Date | null;
  fyhAlta: Date;
  clienteId: number;
  cargaTipoId: number;
  cargaEstadoId: CargaEstadoId;
};

export type CargaEstado = {
  id: CargaEstadoId;
  nombre: string;
  fyhAlta: Date;
  fyhBaja: Date | null;
};

export type CargaCambioEstado = {
  id: number;
  cargaId: number;
  cargaEstadoId: number;
  fyhCambio: Date;
};

export type CargaMovimiento = {
  id: number;
  fyhAlta: Date;
  cargaId: number;
  cargaMovimientoTipoId: number;
  cargaMovimientoEstadoId: number;
  cargaMovimientoComprobanteId: number | null;
  tramoRutaId: number;
  acopladoRutaId: number | null;
};
