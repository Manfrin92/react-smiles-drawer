import { useEffect } from "react";
import SmilesDrawer from "smiles-drawer";

export function MolecularStructure({ smilesString }) {
  useEffect(() => {
    if (smilesString && smilesString !== "") {
      SmilesDrawer.apply();
    }
  }, []);

  return <canvas data-smiles={smilesString} />;
}
