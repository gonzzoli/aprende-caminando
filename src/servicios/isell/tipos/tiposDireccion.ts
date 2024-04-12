import { Position } from "geojson";

export const TIPOS_DIRECCION = {
  HANGAR: 1,
  CLIENTE: 2,
  PROPIETARIO: 3,
} as const;

export type DireccionTipoId = (typeof TIPOS_DIRECCION)[keyof typeof TIPOS_DIRECCION];

export type DireccionTipo = {
  id: DireccionTipoId;
  nombre: string;
};

export type Direccion = {
  id: number;
  calle: string | null;
  numero: string | null;
  descripcion: string | null;
  tipo: string;
  geom: Position;
  fyhAlta: Date | null;
  fyhBaja: Date | null;
  direccionTipoId: DireccionTipoId;
};

export type DireccionVehiculo = {
  id: number;
  fyh_alta: Date;
  fyh_baja: Date | null;
  vehiculoId: number;
  direccionId: number;
};

export type DireccionCarga = {
  id: number;
  tipo: string;
  direccionId: number;
};

export type DireccionRuta = {
  id: number;
  tipo: string;
  direccionId: number;
  rutaId: number;
};
