import Image from "next/image";
import styles from "../styles/page.module.css";
import Head from "next/head";
import Form from "../components/form";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>HRnet</title>
			</Head>

			<div>
				<h1>HRnet</h1>
				<Link href="/employees" className={styles.toEmployeesList}>
					View Current Employees
				</Link>

				<h2>Create Employee</h2>

				<Form />
			</div>
		</>
	);
}
