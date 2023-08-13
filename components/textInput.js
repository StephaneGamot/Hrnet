import styles from "../styles/page.module.css";

export default function TextInput({ label, id, value, onChange, placeholder, type = "text" }) {
	return (
		<div className={styles.inputGroup}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} className={styles.input} required />
		</div>
	);
}


