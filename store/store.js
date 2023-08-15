import { configureStore } from "@reduxjs/toolkit";         // On importe la fonction configureStore depuis la bibliothèque Redux Toolkit.
import employeeReducer from "../features/employeeSlice";   // Cette fonction détermine comment l'état de l'application change en réponse à une action.

export const store = configureStore({                      // Cette fonction permet de créer facilement un store Redux en fournissant simplement un objet de configuration.
	reducer: {                                               // Ce réducteur spécifie comment l'état évolue en réponse aux actions envoyées au magasin.
		employees: employeeReducer,                            // qui gère l'état sous la clé `employees`
	},
});

// Un reducer est une fonction qui prend en compte l'état actuel de l'application et une action, 
// puis renvoie un nouvel état basé sur cette action.

// Crée et exporte le store Redux en utilisant la fonction configureStore. 
// L'objet de configuration passé à cette fonction spécifie que l'état de l'application 
// doit être divisé en deux sous-états 'user' et 'auth', chacun étant géré par son propre reducer.