import { states } from '../data/states';  // Assurez-vous que le chemin est correct

function StateOptions() {
    return (
        <>
            {states.map((state, index) => (
                <option key={index} value={state.abbreviation}>
                    {state.name}
                </option>
            ))}
        </>
    );
}

export default StateOptions;
