export const TIPOS_PROPIETARIO = {
  PERSONA_JURIDICA: 1,
  PERSONA_FISICA: 2,
} as const;

export type PropietarioTipoId = (typeof TIPOS_PROPIETARIO)[keyof typeof TIPOS_PROPIETARIO];

export type PropietarioTipo = {
  id: PropietarioTipoId;
  nombre: string;
};

export type Propietario = {
  id: number;
  propietarioConcretoId: number;
  propietarioTipoId: PropietarioTipoId;
  fyhAlta: Date;
  fyhBaja: Date | null;
};

export type PersonaJuridica = {
  id: number;
  nombreFantasia: string;
  telefono: string | null;
};

export type PersonaFisica = {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string | null;
  choferId: number | null;
};
