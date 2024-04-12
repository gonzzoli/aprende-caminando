export type ClaseLicencia = {
  id: number;
  nombre: string;
};

export type ChoferClaseLicencia = {
  id: number;
  rutaArchivo: string;
  esValida: boolean;
  fechaVencimiento: Date;
  claseLicenciaId: number;
  choferId: number;
};

export type VehiculoTipoClaseLicencia = {
  id: number;
  vehiculoTipoId: number;
  claseLicenciaId: number;
};
