import { MolecularStructure } from "../components/MolecularStructure";

export default {
  title: "Example/MolecularStructure",
  component: MolecularStructure,
  parameters: {
    smilesString: "C1CCCCC1",
  },
};

export const LoggedIn = {
  args: {
    smilesString: "C1CCCCC1",
  },
};
