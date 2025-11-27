"use client";

import { PetType } from "@/components/pets/pet.interface";
import { createContext, useContext, useState, ReactNode } from "react";

interface PetsContextType {
  pets: PetType[];
  setPets: (pets: PetType[]) => void;
  getPetById: (id: string) => PetType | undefined;
}

const PetsContext = createContext<PetsContextType | undefined>(undefined);

export function PetsProvider({ children }: { children: ReactNode }) {
  const [pets, setPets] = useState<PetType[]>([]);

  // Helper function to find a pet by ID
  const getPetById = (id: string) => pets.find((pet) => pet.id === id);

  return (
    <PetsContext.Provider value={{ pets, setPets, getPetById }}>
      {children}
    </PetsContext.Provider>
  );
}

export function usePets() {
  const context = useContext(PetsContext);
  if (!context) {
    throw new Error("usePets must be used within a PetsProvider");
  }
  return context;
}
