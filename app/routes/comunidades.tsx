import React from "react";
import type { Route } from "./+types/comunidades";
import { getAllComunidades } from "~/services/parques";
import type { Comunidad } from "~/types/interfaces";

export async function loader() {
  try {
    const comunidades: Comunidad[] = await getAllComunidades();
    console.log("Comunidades Loaded [serverside]: ", comunidades);
    return { comunidades: comunidades };
  } catch (error) {
    console.log("Error fetching comunidades: ", error);
    return { comunidades: [] };
  }
}

function Comunidades({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  const comunidades: Comunidad[] = loaderData.comunidades;

  return (
    <div>
      <h1 className="text-3xl">Comunidades</h1>
      <ul>
        {comunidades.map((comunidad) => (
          <li key={comunidad.id}>{comunidad.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comunidades;
