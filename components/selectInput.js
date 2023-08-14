import styles from "../styles/page.module.css";

export default function SelectInput({ label, id, value, onChange, children }) {
	return (
		<div className={styles.inputGroup}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<select name={id} id={id} value={value} className={styles.input} onChange={onChange}>
				{children}
			</select>
		</div>
	);
}

