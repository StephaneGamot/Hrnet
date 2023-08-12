"use client";
import { useState } from "react";
import FiftyStates from "../components/fiftyStates";
import styles from "../styles/page.module.css";

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

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!firstName || !lastName || !dateOfBirth || !startDate || !street || !city || !state || !zipCode || !department) {
			alert("Please fill all fields before saving.");
			return;
		} else {
			saveEmployee();
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
		setFirstName("");
		setLastName("");
		setDateOfBirth("");
		setStartDate("");
		setDepartment("");
		setStreet("");
		setCity("");
		setState("");
		setZipCode("");
		setConfirmationOpen(true);
	};

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit} className="form">
				<div className={styles.inputGroup}>
					<label htmlFor="first-name" className={styles.label}>
						First Name
					</label>
					<input
						type="text"
						id="first-name"
						placeholder="Enter your first name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						className={styles.input}
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label htmlFor="last-name" className={styles.label}>
						Last Name
					</label>
					<input
						type="text"
						id="last-name"
						placeholder="Enter your last name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						className={styles.input}
						required
					/>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="date-of-birth" className={styles.label}>
						Date of Birth
					</label>
					<input type="date" id="date-of-birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className={styles.input} required />
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="start-date" className={styles.label}>
						Start Date
					</label>
					<input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={styles.input} required />
				</div>

				<fieldset className={styles.adress}>
					<legend>&ensp; Address &ensp;</legend>

					<label htmlFor="street" className={styles.label}>
						Street
					</label>
					<input
						id="street"
						type="text"
						value={street}
						placeholder="Enter your street"
						className={styles.input}
						onChange={(e) => setStreet(e.target.value)}
						required
					/>

					<label htmlFor="city" className={styles.label}>
						City
					</label>
					<input id="city" type="text" value={city} placeholder="Enter your city" className={styles.input} onChange={(e) => setCity(e.target.value)} required />

					<label htmlFor="state" className={styles.label}>
						State
					</label>
					<select name="state" id="state" className={styles.input} value={state} onChange={(e) => setState(e.target.value)}>
						<FiftyStates />
					</select>

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
					<label htmlFor="departement" className={styles.label}>
						Departement
					</label>

					<select name="department" id="department" value={department} className={styles.input} onChange={(e) => setDepartment(e.target.value)}>
						<option>Sales</option>
						<option>Marketing</option>
						<option>Engineering</option>
						<option>Human Resources</option>
						<option>Legal</option>
					</select>
				</div>
				<button type="submit" className={styles.save}>
					Save
				</button>

				{isConfirmationOpen && (
					<div id="confirmation" className={styles.confirmation}>
						Employee Created!
					</div>
				)}
			</form>
		</div>
	);
}
