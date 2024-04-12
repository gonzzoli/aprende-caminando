export const TIPOS_USUARIO = {
  CHOFER: 1,
  CLIENTE: 2,
  PROPIETARIO: 3,
  ADMINISTRADOR: 4,
} as const;

export type UsuarioTipoId = (typeof TIPOS_USUARIO)[keyof typeof TIPOS_USUARIO];

export type UsuarioTipo = {
  id: UsuarioTipoId;
  nombre: string;
};

export type Usuario = {
  id: number;
  email: string;
  kindeId: string;
  usuarioTipoId: UsuarioTipoId;
  usuarioConcretoId: number;
};

// Este deberia ser un usuario igual que los demas, pero con usuarioTipo de ADMINISTRADOR
// Y con eso alcanzaria para estar autorizado en todas las rutas basicamente. O al menos las que especifiquemos
export type Administrador = {
  id: number;
  nombre: string;
  email: string;
};
