import { createSlice } from "@reduxjs/toolkit";

const initialState = [];                         // On créer le state initial (sa valeur de départ) pour la tranche (slice) de données. 

const employeeSlice = createSlice({              // Création d'unetranche (ou slice), c'est la combinaison d'un réducteur et de ses actions.
	name: "employees",
	initialState,
	reducers: {                                  // Les réducteurs définissent comment l'état évolue en réponse aux actions.
		addEmployee: (state, action) => {        // Le réducteur `addEmployee` ajoute un employé à l'état.
			state.push(action.payload);          // Ajoute l'employé (fourni par `action.payload`) à l'état courant.
		},
	},
});

export const { addEmployee } = employeeSlice.actions; // Exportation des actions générées par `createSlice`pour utiliser pour déclencher des changements d'état dasn les composants
export default employeeSlice.reducer;                 // J'exporte ce réducteur pour créer le store Redux.





           



