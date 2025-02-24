const URL_PARQUES = "http://www.ies-azarquiel.es/paco/apiparques";

import type { Comunidad, ComunidadesListResponse } from "~/types/interfaces";

// This function will return a list of all the Pokémon (in total, there are less than 2000)
export async function getAllComunidades(): Promise<Comunidad[]> {
  try {
    const response: Response = await fetch(`${URL_PARQUES}/comunidades`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Comunidades list: ${response.status} ${response.statusText}`
      );
    }

    const data: ComunidadesListResponse = await response.json();
    console.log("Fetched Comunidades list:", data.comunidades);
    return data.comunidades;
  } catch (error) {
    console.error("Error fetching all Comunidades:", error);
    return []; // Return an empty array in case of failure
  }
}
