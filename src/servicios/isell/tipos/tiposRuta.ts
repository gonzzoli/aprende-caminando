import { Feature, MultiPoint } from "geojson";

export const ESTADOS_RUTA = {
  PLANIFICADA: 1,
  VIAJANDO: 1,
  FINALIZADA: 2,
  CANCELADA: 3,
} as const;

export type RutaEstadoId = (typeof ESTADOS_RUTA)[keyof typeof ESTADOS_RUTA];

export type RutaEstado = {
  id: RutaEstadoId;
  nombre: string;
};

export type Ruta = {
  id: number;
  fyhAlta: Date;
  fyhBaja: Date | null;
  fyhInicio: Date | null;
  fyhFin: Date | null;
  distanciaTotalMts: number | null;
  duracionTotalSeg: number | null;
  choferVehiculoId: number;
  rutaEstadoId: RutaEstadoId;
};

export type RutaGeoJSON = Feature<MultiPoint, Ruta>;

export type RutaCambioEstado = {
  id: number;
  fyhCambio: Date;
  rutaEstadoId: number;
  rutaId: number;
};

export type TramoRutaEstado = {
  id: number;
  nombre: string;
};

export type TramoRuta = {
  id: number;
  fyhAsignacion: Date | null;
  fyhEstimadaArribo: Date | null;
  fyhArribo: Date | null;
  duracionEstimadaSeg: number | null;
  distanciaMts: number | null;
  // Despues veo como las devuele la base de datos a las geom
  geom: number[][] | null;
  orden: number;
  direccionId: number;
  rutaId: number;
  tramoRutaEstadoId: number;
};

export type TramoRutaCambioEstado = {
  id: number;
  fyhCambio: Date;
  tramoRutaEstadoId: number;
  tramoRutaId: number;
};
