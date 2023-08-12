import React from "react";
import styles from "../styles/page.module.css";
import EmployeeTable from "../components/employeeTable";
import Link from "next/link";
import Head from "next/head";

export default function Employees() {
    return (
        <main className={styles.employeePage}>
        <div className={styles.employeeContainer}>
            <h1 className={styles.employeeTitle}>Current Employees</h1>
            <EmployeeTable />
            <Link href="/">Home</Link>
        </div></main>
    );
}
