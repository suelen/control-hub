// app/(pages)/pets/layout.tsx
import { PetsProvider } from "@/context/PetsContext";

export default function PetsLayout({ children }: { children: React.ReactNode }) {
  return <PetsProvider>{children}</PetsProvider>;
}
