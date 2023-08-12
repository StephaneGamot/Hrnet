import { states as dataStates } from "../data/states";

export default function FiftyStates() {
	const states = dataStates;
	const stateOptions = states.map((state) => (
		<option key={state.abbreviation} value={state.abbreviation}>
			{state.name}
		</option>
	));
	return stateOptions;
}
