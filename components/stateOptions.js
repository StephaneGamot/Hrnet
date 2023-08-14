import { states } from '../data/states';  

export default function StateOptions() {
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


