export type Chofer = {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  estaHabilitado: boolean;
  numeroTelefono: string | null;
  fyhAlta: Date;
  fyhBaja: Date | null;
  propietarioId: number;
};

export type ChoferVehiculo = {
  id: number;
  estaManejando: boolean;
  habilitado: boolean;
  fyhAlta: Date;
  fyhBaja: Date | null;
  choferId: number;
  vehiculoId: number;
};

export type Calificacion = {
  id: number;
  puntuacion: number;
  comentario: string;
  calificadorId: number;
  calificadoId: number;
};
