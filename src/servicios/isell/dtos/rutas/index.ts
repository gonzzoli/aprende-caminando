import { z } from "zod";
import { numberZod, paginacionZod, stringZod } from "@utils/zodUtils";
export * from "./tramoRuta";

/*
Como los DTO que recibimos del cliente contienen datos que ellos ingresan
no nos podemos confiar del todo, por mas que chequeemos en el front.
Por eso, al menos para los DTO que recibimos, creamos una validacion con zod
y a partir de ello inferimos el tipo de typescript para usarlo en el backend.
Esta validacion permite agregarla como middleware y que rechaze la peticion si no cumple
las especificaciones del DTO que definamos nosotros.
Para los demas datos (como los traidos desde la base de datos) no es necesario
realizar validacion, pues eso es interno a nuestro sistema.

Idealmente deberiamos poder reutilizar estos tipos en la aplicacion movil
para que concuerden los datos enviados y esperados.
*/

const schemaCrearRutaDTOCargaPrevia = z.object({
  coordenadas: numberZod("coordenadas").array().length(2).array().length(2),
  peso: numberZod("peso").nonnegative(),
  //metrosCuadrados: numberZod("").nonnegative(),
  // todas opcionales estas, porque puede que no sea
  // en una calle si no en el medio de la nada por ejemplo. Ademas, permitimos
  // que el usuario ingrese estos datos manualmente, por pequeños ajustes de numero
  // o calle que pueden no detectarse por coordenadas
  descripcion: stringZod("descripcion").optional(),
  calleOrigen: stringZod("nombre de calle de origen").optional(),
  calleDestino: stringZod("nombre de calle de destino").optional(),
  numeroOrigen: stringZod("numero en calle en origen").optional(),
  numeroDestino: stringZod("numero en calle de destino").optional(),
});
// y asi creamos el tipo que usaremos internamente en el servicio, repositorio y demas
export type CrearRutaDTOCargaPrevia = z.infer<typeof schemaCrearRutaDTOCargaPrevia>;

export const schemaCrearRutaDTO = z.object({
  body: z.object({
    choferVehiculoId: numberZod("id del chofer").positive(),
    fyhInicio: z.coerce.date(),
    coordenadas: z.array(numberZod("coordenadas de origen").array().length(2)).min(1).max(2),
    cargasPrevias: z.array(schemaCrearRutaDTOCargaPrevia).optional(),
  }),
});
// el schema valida las requests, pero a nosotros nos interesa usar los datos en si
// y no el tipo con body, query, params, etc. Por lo que extraemos cada uno de los tipos
// especificados
export type CrearRutaDTO = z.infer<typeof schemaCrearRutaDTO>["body"];

export const schemaBuscarRutasDTO = z.object({
  query: z.object({
    paginacion: paginacionZod(),
  }),
});

export type BuscarRutasDTO = z.infer<typeof schemaBuscarRutasDTO>["query"];
