import type { VehicleData } from "./types/types";

export const fetchVehicles = async (): Promise<VehicleData[]> => {
  const response = await fetch("../../data/vehicles.json");

  if (!response.ok) {
    throw new Error("Error al cargar vehículos");
  }

  const data: VehicleData[] = await response.json();
  return data;
};