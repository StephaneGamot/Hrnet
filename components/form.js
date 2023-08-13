"use client";
import { useState } from "react";
import StateOptions from "../components/stateOptions";
import DepartmentOptions from "../components/departmentOptions";
import styles from "../styles/page.module.css";
import DateInput from "../components/dateInput";
import SelectInput from "../components/selectInput";
import TextInput from "../components/textInput";
import Modal from "./modal"

export default function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [startDate, setStartDate] = useState("");
	const [department, setDepartment] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [isConfirmationOpen, setConfirmationOpen] = useState(false);

	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!firstName || !lastName || !dateOfBirth || !startDate || !street || !city || !state || !zipCode || !department) {
			alert("Please fill all fields before saving.");
			return;
		} else {
			saveEmployee();
			setConfirmationOpen(true); // Ouvre la modale
		}
	};
	const saveEmployee = () => {
		const employees = JSON.parse(localStorage.getItem("employees")) || [];
		const employee = {
			firstName,
			lastName,
			dateOfBirth,
			startDate,
			department,
			street,
			city,
			state,
			zipCode,
		};
		employees.push(employee);
		localStorage.setItem("employees", JSON.stringify(employees));
		//setFirstName("");
		//setLastName("");
	//	setDateOfBirth("");
	//	setStartDate("");
	//	setDepartment("");
	//	setStreet("");
	//	setCity("");
	//	setState("");
	//	setZipCode("");
	//	setConfirmationOpen(true);
	};

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit} className="form">
				<div className={styles.inputGroup}>
					<TextInput label="First Name" id="first-name" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
					<TextInput label="Last Name" id="last-name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</div>

				<DateInput label="Date of Birth" id="date-of-birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

				<DateInput label="Start Date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

				<fieldset className={styles.adress}>
					<legend>&ensp; Address &ensp;</legend>

					<TextInput label="Street" id="street" placeholder="Enter your street" value={street} onChange={(e) => setStreet(e.target.value)} />
					<TextInput label="City" id="city" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} />

					<SelectInput label="State" id="state" value={state} onChange={(e) => setState(e.target.value)}>
						<StateOptions />
					</SelectInput>

					<label htmlFor="zip-code" className={styles.label}>
						Zip Code
					</label>
					<input
						id="zip-code"
						type="number"
						placeholder="Enter your zip code"
						value={zipCode}
						className={styles.input}
						onChange={(e) => setZipCode(e.target.value)}
					/>
				</fieldset>

				<div className={styles.inputGroup}>
					<SelectInput label="Département" id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
						<DepartmentOptions />
					</SelectInput>
				</div>
				<button type="submit" className={styles.save}>
					Save
				</button>

				{isConfirmationOpen && (
					
					<Modal
                isOpen={isConfirmationOpen}
                    onClose={() => setConfirmationOpen(false)}
                title="Employee Created!"
                textColor="red"
                backgroundColor="black"
                borderColor="green"
                titleFontSize="30px"
                contentFontSize="18px"
                customStyles={{
                    header: { padding: "20px" },
                   content: { fontWeight: "bold" },
                    overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                    modal: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }
                }}
           />
/* TEXTE A AJOUTER */ 
				)}
			</form>
		</div>
	);
}