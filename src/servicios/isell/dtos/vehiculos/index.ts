import { z } from "zod";
import { schemaCrearEspecificacionTecnicaDTO } from "./especificacionTecnica";
import { CodigosError } from "@servicios/isell/errores";
import {
  Vehiculo,
  VehiculoEspecificacionTecnica,
  Paginado,
  VehiculoTipo,
} from "@servicios/isell/tipos";
import { stringZod, numberZod, booleanZod, paginacionZod, ordenamientoZod } from "@utils/zodUtils";
export * from "./tipos";
export * from "./acoplado";
export * from "./especificacionTecnica";

export const schemaCrearVehiculoDTO = z.object({
  body: z.object({
    patente: stringZod("patente").max(10),
    // Puede enviar el id de una plantilla de especificacion tecnica, o puede mandar la especificacion tecnica
    // de este vehiculo particular.
    datosVehiculo: schemaCrearEspecificacionTecnicaDTO.shape.body.or(
      z.object({
        especificacionTecnicaId: numberZod("id de la especificacion tecnica"),
      }),
    ),

    documentos: z
      .object({
        // imagenes serian estos, quiza formato base64 por eso string
        tituloVehiculo: z.string(),
        seguroVehiculo: z.string(),
        RTOVehiculo: z.string(),
      })
      .partial()
      .optional(),
  }),
});

export type CrearVehiculoDTO = z.infer<typeof schemaCrearVehiculoDTO>["body"];

export type ResCrearVehiculo = {
  codigosError: CodigosError.PATENTE_FORMATO_INVALIDO;
  datos: Vehiculo;
};

export const schemaActualizarVehiculoDTO = z.object({
  body: z
    .object({
      patente: stringZod("patente").max(10),
      pesoMaximo: numberZod("peso maximo ").positive(),
      metrosCuadrados: numberZod("metros cuadrados").positive(),
      // Si la especificacion del vehiculo esta asociada a una plantilla, dar la opcion de modificar
      // la plantilla tambien con estos cambios, actualizando todos los vehiculos similares. Medio peligrosa quizas. veremos
      // TODO
      sobreescribirPlantilla: booleanZod().default("false"),
    })
    .partial(),
  params: z.object({
    vehiculoId: z.coerce.number(),
  }),
});

export type ActualizarVehiculoDTO = z.infer<typeof schemaActualizarVehiculoDTO>["body"] &
  z.infer<typeof schemaActualizarVehiculoDTO>["params"];

export type ResActualizarVehiculo = {
  // Solo los codigos de error que lanza explicitamente este servicio.
  // Errores de queryBD, preparacionDatos, repos, etc, no serian problemas de negocio, sino tecnicos.
  // De esta forma podemos dar mayores indicaciones en el front ya que podemos reconocer el error
  codigosError: CodigosError.RECURSO_AJENO | CodigosError.PATENTE_FORMATO_INVALIDO;
  datos: Omit<Vehiculo, "vehiculoEspecificacionTecnicaId"> & {
    especificacionTecnica: VehiculoEspecificacionTecnica;
  };
};

export const schemaEntregarDocumentacionVehiculoDTO = z.object({
  body: z.object({
    documento1: z.string(),
  }),
});

export type EntregarDocumentacionVehiculoDTO = z.infer<
  typeof schemaEntregarDocumentacionVehiculoDTO
>;

export const schemaBuscarVehiculoPorId = z.object({
  params: z.object({
    vehiculoId: numberZod("id del vehiculo"),
  }),
});

export type BuscarVehiculoPorId = z.infer<typeof schemaBuscarVehiculoPorId>["params"];

export type ResBuscarVehiculoPorId = {
  codigosError: CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Vehiculo;
};

export const OrdenamientoVehiculo = [
  {
    nombre: "fyhAlta",
    tabla: "vehiculo",
    columna: "fyhAlta",
  },
  { nombre: "pesoMaximoKg", tabla: "vehiculo", columna: "peso_maximo_kg" },
  { nombre: "largoMts", tabla: "vehiculo", columna: "largo_mts" },
] as const;

export const OpcionesVehiculoHabilitado = {
  HABILITADO: "HABILITADO",
  INHABILITADO: "INHABILITADO",
  AMBOS: "AMBOS",
} as const;

export const schemaBuscarVehiculosDTO = z.object({
  query: z.object({
    filtros: z
      .object({
        rangoPeso: z.object({
          pesoDesde: numberZod("peso minimo"),
          pesoHasta: numberZod("peso maximo"),
        }),
        rangoAlto: z.object({
          metrosDesde: numberZod("metros altura minimos"),
          metrosHasta: numberZod("metros altura maximos"),
        }),
        rangoAncho: z.object({
          metrosDesde: numberZod("metros ancho minimos"),
          metrosHasta: numberZod("metros ancho maximos"),
        }),
        rangoLargo: z.object({
          metrosDesde: numberZod("metros largo minimos"),
          metrosHasta: numberZod("metros largo maximos"),
        }),
        rangoMetrosCubicos: z.object({
          metrosCubicosDesde: numberZod("metros cubicos minimos"),
          metrosCubicosHasta: numberZod("metros cubicos maximos"),
        }),
        vehiculoTipoId: numberZod("id de tipo vehiculo"),
        habilitados: z.nativeEnum(OpcionesVehiculoHabilitado),
        patente: stringZod("patente"),
      })
      .partial()
      .optional(),
    paginacion: paginacionZod(),
    ordenamiento: ordenamientoZod(OrdenamientoVehiculo, {
      orden: "desc",
      nombre: "fyhAlta",
    }),
  }),
  params: z.object({ propietarioId: numberZod("id de propietario") }),
});

export type BuscarVehiculosDTO = z.infer<typeof schemaBuscarVehiculosDTO>["query"] &
  z.infer<typeof schemaBuscarVehiculosDTO>["params"];

export type ResBuscarVehiculos = {
  codigosError:
    | CodigosError.ORDENAMIENTO_INVALIDO
    | CodigosError.PAGINACION_INVALIDA
    | CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Paginado<Vehiculo>;
};

export const schemaBuscarVehiculosTipoDTO = z.object({
  query: z.object({
    filtros: z
      .object({
        claseLicenciaId: numberZod("id de clase licencia"),
      })
      .partial()
      .optional(),
    paginacion: paginacionZod(),
  }),
});

export type BuscarVehiculosTipoDTO = z.infer<typeof schemaBuscarVehiculosTipoDTO>["query"];

export type ResBuscarVehiculosTipo = {
  codigosError:
    | CodigosError.ORDENAMIENTO_INVALIDO
    | CodigosError.PAGINACION_INVALIDA
    | CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Paginado<VehiculoTipo>;
};
