export type ClienteTipo = {
  id: number;
  nombre: string;
};

export type Cliente = {
  id: number;
  dni: string;
  estaHabilitado: boolean;
  nombre: string;
  apellido: string;
  numeroTelefono: string | null;
  fyhAlta: Date;
  fyhBaja: Date | null;
  clienteTipoId: number;
};
