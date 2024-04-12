export type Acoplado = {
  id: number;
  descripcion: string | null;
  patente: string;
  propietarioId: number;
  acopladoEspecificacionTecnicaId: number;
};

export type AcopladoEspecificacionTecnica = {
  id: number;
  pesoMaximoKg: number;
  volumenMtsCubicos: number;
  altoMts: number;
  anchoMts: number;
  largoMts: number;
  acopladoTipoId: number | null;
};

export type AcopladoEspecificacionTecnicaPlantilla = {
  id: number;
  fyhAlta: Date | null;
  fyhBaja: Date | null;
  acopladoEspecificacionTecnicaId: number;
};

export type AcopladoRuta = {
  id: number;
  acopladoId: number;
  rutaId: number;
};

export type AcopladoTipo = {
  id: number;
  nombre: string;
};

export type AcopladoTipoCargaTipo = {
  id: number;
  acopladoTipoId: number;
  cargaTipoId: number;
};
