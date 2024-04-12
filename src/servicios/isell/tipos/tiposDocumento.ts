export type Documento = {
  id: number;
  nombre: string;
  descripcion: string | null;
};

export type ClienteTipoDocumentoRequerido = {
  id: number;
  descripcion: string | null;
  clienteTipoId: number;
  documentoId: number;
};

export type ClienteDocumentoEntregado = {
  id: number;
  rutaArchivo: string;
  esValida: boolean;
  fyhAlta: Date | null;
  fyhBaja: Date | null;
  clienteId: number;
  clienteTipoDocumentoRequeridoId: number;
};

export type AcopladoTipoDocumentoRequerido = {
  id: number;
  descripcion: string | null;
  documentoId: number;
  acopladoTipoId: number;
};

export type AcopladoDocumentoEntregado = {
  id: number;
  fyhAlta: Date | null;
  rutaArchivo: string;
  esValido: boolean;
  acopladoId: number;
  acopladoTipoDocumentoRequeridoId: number;
};

export type PropietarioTipoDocumentoRequerido = {
  id: number;
  descripcion: string | null;
  documentoId: number;
 propietarioTipoId: number;
};

export type PropietarioDocumentoEntregado = {
  id: number;
  fyhAlta: Date | null;
  rutaArchivo: string;
  esValido: boolean;
 propietarioId: number;
 propietarioTipoDocumentoRequeridoId: number;
};

export type ChoferDocumentoRequerido = {
  id: number;
  descripcion: string | null;
  documentoId: number;
};

export type ChoferDocumentoEntregado = {
  id: number;
  rutaArchivo: string;
  esValida: boolean;
  fyhAlta: Date,
  choferDocumentoRequeridoId: number;
  choferId: number;
};

export type VehiculoTipoDocumentoRequerido = {
  id: number;
  descripcion: string | null;
  vehiculoTipoId: number;
  documentoId: number;
};

export type VehiculoDocumentoEntregado = {
  id: number;
  rutaArchivo: string;
  esValida: boolean;
  vehiculoTipoDocumentoRequeridoId: number;
  vehiculoId: number;
};

export type ChoferVehiculoDocumentoRequerido = {
  id: number;
  descripcion: string | null;
  documentoId: number;
};

export type ChoferVehiculoDocumentoEntregado = {
  id: number;
  fyhAlta: Date | null;
  rutaArchivo: string;
  esValido: boolean;
  choferVehiculoId: number;
  choferVehiculoDocumentoRequeridoId: number;
};

export type HangarDocumentoRequerido = {
  id: number;
  descripcion: string | null;
  documentoId: number;
};

export type HangarDocumentoEntregado = {
  id: number;
  fyhAlta: Date | null;
  rutaArchivo: string;
  esValido: boolean;
  hangarId: number;
  hangarDocumentoRequeridoId: number;
};
