export type Vehiculo = {
  id: number;
  patente: string;
  habilitado: boolean;
  propietarioId: number;
  fyhAlta: Date;
  fyhBaja: Date | null;
  vehiculoEspecificacionTecnicaId: number;
};

export type VehiculoTipo = {
  id: number;
  nombre: string;
  fyhAlta: Date;
  fyhBaja: Date | null;
};

export type VehiculoTipoCargaTipo = {
  id: number;
  cargaTipoId: number;
  vehiculoTipoId: number;
};

export type VehiculoEspecificacionTecnica = {
  id: number;
  pesoMaximoKg: number;
  volumenMtsCubicos: number;
  altoMts: number;
  anchoMts: number;
  largoMts: number;
  vehiculoTipoId: number;
};

export type VehiculoEspecificacionTecnicaPlantilla = {
  id: number;
  fyhAlta: Date;
  fyhBaja: Date | null;
  propietarioId: number;
  vehiculoEspecificacionTecnicaId: number;
};
