import { Link } from "react-router-dom"
import SideMenu from "../Components/SideMenu"
import styles from "./Database.module.css"

function Database() {
  return (
    <div className={styles.wrapper}>
      <SideMenu />
      <DataStore />
    </div>
  )
}
//! Pagination

function DataStore() {
  return (
    <div className={styles.container}>
      <h2>Database</h2>
      <div className={styles.header}>
        <span>Information and statstics about all student in this school</span>
        <button>
          <Link to="create">Create student +</Link>
        </button>
      </div>
      <ul>
        <section className={styles.content}>
          <span className={styles.studentName}>
            <span>Name</span>

            <svg
              stroke="currentColor"
              fill="#333"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </span>
          <span className={styles.gender}>Gender</span>
          <span className={styles.grade}>Section</span>
          <span className={styles.school}>school</span>
          <span className={styles.mark}>Total Mark</span>
          <span className={styles.status}>Action</span>
        </section>

        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ul>
      {/* Pagination */}
      <div className={styles.paginationCon}></div>
    </div>
  )
}

function List() {
  return (
    <Link to={`student/${"1245866"}`}>
      <li>
        <span className={styles["each-name"]}>Samuel Tale Dejene</span>
        <span className={styles["each-gender"]}>M</span>
        <span className={styles["each-gender"]}>A</span>
        <span className={styles["each-school"]}>Mehal Meda primary school</span>
        <span className={styles["each-gender"]}>600/700</span>
        <span className={styles["each-action"]}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"></path>
          </svg>
        </span>
      </li>
    </Link>
  )
}
export default Database
