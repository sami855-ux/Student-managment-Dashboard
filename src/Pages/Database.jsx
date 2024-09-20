import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import SideMenu from "../Components/SideMenu"
import styles from "./Database.module.css"
import Spinner from "../Components/Spinner"

const URL = "http://localhost:1234/student"

function capitalizedName(fullname) {
  const splitedName = fullname.split(" ")

  let nameArr = []

  splitedName.forEach((name) => {
    let fristLetter = name[0].toUpperCase()
    let full = `${fristLetter}${name.slice(1)}`
    nameArr.push(full)
  })

  return nameArr.join(" ")
}

function Database() {
  return (
    <div className={styles.wrapper}>
      <SideMenu />
      <DataStore />
    </div>
  )
}

function DataStore() {
  const [studentData, setStudentData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  //!Pagination Logic Here

  useEffect(function () {
    async function fetchStudent() {
      try {
        setIsLoading(true)
        const res = await fetch(URL)
        const data = await res.json()

        if (!data.length > 0) {
          throw new Error("There is no data from the server")
        }

        setStudentData(data)
      } catch (err) {
        console.log(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchStudent()
  }, [])

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

        <>
          {isLoading && <Spinner />}
          {studentData && studentData.length > 0
            ? studentData.map((student, studentIndex) => (
                <List
                  fullName={`${student.fristName} ${student.fatherName} ${student.grandFatherName}`}
                  gender={student.gender}
                  section={`${student.grade} th ${student.section}`}
                  school={student.school}
                  mark={student.mark}
                  id={student.id}
                  key={studentIndex}
                />
              ))
            : null}
        </>
      </ul>
      {/* Pagination */}
      <div className={styles.paginationCon}></div>
    </div>
  )
}

function List({ fullName, gender, section, school, mark, id }) {
  let arr = []
  mark.map((ma) => arr.push(Number(ma[1])))

  let totalMark = arr.reduce((perv, curr) => (curr = curr + perv), 0)

  let action = ""

  if (totalMark >= 600 && totalMark <= 700) {
    action = "Exellent "
  } else if (totalMark > 500 && totalMark <= 599) {
    action = "Very Good"
  } else if (totalMark > 400 && totalMark <= 499) {
    action = "Good"
  } else if (totalMark > 300 && totalMark <= 399) {
    action = "Medium"
  } else if (totalMark > 0 && totalMark <= 299) {
    action = "Poor"
  } else {
    action = ""
  }

  return (
    <Link to={`student/${id}`}>
      <li>
        <span className={styles["each-name"]}>{capitalizedName(fullName)}</span>
        <span className={styles["each-gender"]}>{gender}</span>
        <span className={styles["each-gender"]}>{section}</span>
        <span className={styles["each-school"]}>{capitalizedName(school)}</span>
        <span className={styles["each-gender"]}>{`${totalMark}/700`}</span>
        <span className={styles["each-action"]}>{action}</span>
      </li>
    </Link>
  )
}

List.propTypes = {
  fullName: PropTypes.string,
  gender: PropTypes.string,
  section: PropTypes.string,
  school: PropTypes.string,
  id: PropTypes.string,
  mark: PropTypes.array,
}
export default Database
