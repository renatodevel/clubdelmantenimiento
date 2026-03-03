import { useState } from "react";
import type { VehicleData } from "../types/types";

export const useVehicleSearch = (vehicles: VehicleData[]) => {
  const [vehicleFound, setVehicleFound] = useState<VehicleData | null>(null);
  const [error, setError] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const searchVehicle = (plate: string) => {
    setHasSearched(true);

    const normalized = plate.trim().toUpperCase();

    const result = vehicles.find(
      (v) => v.plate.toUpperCase() === normalized
    );

    if (result) {
      setVehicleFound(result);
      setError("");
    } else {
      setVehicleFound(null);
      setError("Vehículo no encontrado");
    }
  };

  return {
    vehicleFound,
    error,
    hasSearched,
    searchVehicle,
  };
};