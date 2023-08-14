import { departments } from "../data/departments";

export default function DepartmentOptions() {
	return (
		<>
			{departments.map((department, index) => (
				<option key={index} value={department}>
					{department}
				</option>
			))}
		</>
	);
}
