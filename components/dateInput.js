import styles from "../styles/page.module.css";

export default function DateInput({ label, id, value, onChange }) {
	return (
		<div className={styles.inputGroup}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<input type="date" id={id} value={value} onChange={onChange} className={styles.input} required />
		</div>
	);
}
