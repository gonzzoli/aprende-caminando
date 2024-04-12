import { CodigosError } from "@servicios/isell/errores";
import { CargaTipo, Paginado, VehiculoTipo } from "@servicios/isell/tipos";

export type ResBuscarTiposCarga = {
  codigosError:
    | CodigosError.PAGINACION_INVALIDA
    | CodigosError.ORDENAMIENTO_INVALIDO
    | CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Paginado<CargaTipo>;
};

export type ResBuscarTiposVehiculo = {
  codigosError:
    | CodigosError.PAGINACION_INVALIDA
    | CodigosError.ORDENAMIENTO_INVALIDO
    | CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Paginado<VehiculoTipo>;
};
