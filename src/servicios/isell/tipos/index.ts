export * from "./tiposAcoplado"
export * from "./tiposCarga";
export * from "./tiposChofer";
export * from "./tiposClaseLicencia";
export * from "./tiposCliente";
export * from "./tiposDireccion";
export * from "./tiposDocumento";
export * from "./tiposPropietario";
export * from "./tiposRuta";
export * from "./tiposUsuario";
export * from "./tiposVehiculo";

export type DatosPaginacion = {
    totalResultados: number;
    pagSiguiente: number | null;
    pagAnterior: number | null;
    pagTotales: number;
    pagActual: number;
    cantidadPorPagina: number;
  };
  
  export type Paginado<T> = {
    paginacion: DatosPaginacion;
    resultados: T[];
  };