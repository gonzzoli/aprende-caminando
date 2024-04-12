import z from "zod";
import { numberZod, ordenamientoZod, paginacionZod } from "@utils/zodUtils";

const OpcionesOrdenamientoChoferesDePropietario = {
  FECHA_ADHESION: "fyhAlta",
} as const;

export const schemaBuscarChoferesDePropietarioDTO = z.object({
  params: z.object({
    propietarioId: numberZod("id del propietario"),
  }),
  query: z.object({
    filtros: z.object({}).optional(),
    paginacion: paginacionZod(),
    ordenamiento: ordenamientoZod(OpcionesOrdenamientoChoferesDePropietario, {
      orden: "desc",
      nombre: "fyhAlta",
    }),
  }),
});

export type BuscarChoferesDePropietarioDTO = z.infer<
  typeof schemaBuscarChoferesDePropietarioDTO
>["query"] &
  z.infer<typeof schemaBuscarChoferesDePropietarioDTO>["params"];
