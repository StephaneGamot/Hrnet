import { useState, useEffect, useMemo } from "react";
import styles from "../styles/page.module.css";
import { useTable, usePagination, useSortBy, useFilters, useGlobalFilter } from "react-table";
import { useSelector } from "react-redux";

export default function EmployeeTable() {
	const employees = useSelector((state) => state.employees);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(employees);
	}, [employees]);

	const columns = useMemo(
		() => [
			{ Header: "First Name", accessor: "firstName" },
			{ Header: "Last Name", accessor: "lastName" },
			{ Header: "Start Date", accessor: "startDate" },
			{ Header: "Department", accessor: "department" },
			{ Header: "Date of Birth", accessor: "dateOfBirth" },
			{ Header: "Street", accessor: "street" },
			{ Header: "City", accessor: "city" },
			{ Header: "State", accessor: "state" },
			{ Header: "Zip Code", accessor: "zipCode" },
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		canPreviousPage,
		canNextPage,
		nextPage,
		previousPage,
		setGlobalFilter,
		state,
		pageCount,
		gotoPage,
		setPageSize,
	} = useTable({ columns, data, initialState: { pageIndex: 0 } }, useFilters, useGlobalFilter, useSortBy, usePagination);
	function getSortingClass(column) {
		if (column.isSorted) {
			return column.isSortedDesc ? "sorting_desc" : "sorting_asc";
		}
		return "sorting";
	}

	function getAriaLabel(column) {
		return `${column.Header}: activate to sort column ${column.isSorted ? (column.isSortedDesc ? "ascending" : "descending") : "ascending"}`;
	}

	return (
		<div>
			<div className={styles.employeeTableLabel}>
				<div>
					<label className={styles.employeeLabel}>
						Show
						<select value={state.pageSize} onChange={(e) => setPageSize(Number(e.target.value))} className={styles.employeeTableSelect}>
							{[10, 25, 50, 100].map((pageSize) => (
								<option key={pageSize} value={pageSize}>
									{pageSize}
								</option>
							))}
						</select>
						entries
					</label>
				</div>

				<div className={styles.employeeSearch}>
					Search: <input value={state.globalFilter || ""} onChange={(e) => setGlobalFilter(e.target.value || undefined)} />
				</div>
			</div>
			<table className={styles.employeeTable} {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup, hgIndex) => (
						<tr key={`hg-${hgIndex}`} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column, colIndex) => (
								<th
									key={`col-${colIndex}`}
									{...column.getHeaderProps(column.getSortByToggleProps())}
									className={`${getSortingClass(column)} ${styles.thStyle}`}
									tabIndex="0"
									aria-controls="employee-table"
									rowSpan="1"
									colSpan="1"
									aria-sort={column.isSorted ? (column.isSortedDesc ? "descending" : "ascending") : null}
									aria-label={getAriaLabel(column)}
								>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps()}>
					{page.length === 0 ? (
						<tr className="odd">
							<td valign="top" colSpan="9" className={styles.dataTablesEmpty}>
								No data available in table
							</td>
						</tr>
					) : (
						page.map((row, rowIndex) => {
							prepareRow(row);
							return (
								<tr key={`row-${rowIndex}`} {...row.getRowProps()}>
									{row.cells.map((cell, cellIndex) => (
										<td key={`cell-${cellIndex}`} {...cell.getCellProps()}>
											{cell.render("Cell")}
										</td>
									))}
								</tr>
							);
						})
					)}
				</tbody>
			</table>
			<div className={styles.employeeTableLabel}>
				<div className="dataTables_info" id="employee-table_info" role="status" aria-live="polite">
					Showing {page.length === 0 ? 0 : state.pageIndex * state.pageSize + 1}&nbsp;to {state.pageIndex * state.pageSize + page.length} of {data.length}{" "}
					entries
				</div>

				<div className={`${styles.paginationContainer} dataTables_paginate paging_simple_numbers`} id="employee-table_paginate" > 
					<button
						className={`paginate_button previous ${!canPreviousPage ? "disabled" : ""}`}
						aria-controls="employee-table"
						tabIndex="-1"
						disabled={!canPreviousPage}
						onClick={() => previousPage()}
					>
						Previous
					</button>
					<span> &emsp; </span>
					<div className={`${styles.paginationNumbers} pagination`}>
						{[...Array(pageCount)].map((_, pageIndex) => (
							<button key={pageIndex} className={`page-item ${state.pageIndex === pageIndex ? "active" : ""}`} onClick={() => gotoPage(pageIndex)}>
								{pageIndex + 1}
							</button>
						))}
					</div>
					<span> &emsp; </span>
					<button
						className={`paginate_button next ${!canNextPage ? "disabled" : ""}`}
						aria-controls="employee-table"
						tabIndex="-1"
						disabled={!canNextPage}
						onClick={() => nextPage()}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
