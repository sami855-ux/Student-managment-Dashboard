import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import SideMenu from "../Components/SideMenu"
import styles from "./SpecficStu.module.css"
import Spinner from "../Components/Spinner"

const URL = "http://localhost:1234/student"

function capitalizedName(fullname) {
  const splitedName = fullname?.split(" ")

  let nameArr = []

  splitedName?.forEach((name) => {
    let fristLetter = name[0].toUpperCase()
    let full = `${fristLetter}${name.slice(1)}`
    nameArr.push(full)
  })

  return nameArr.join(" ")
}

function SpecficStu() {
  const [speceficStudent, setSpeceficStudent] = useState({})
  const [isStudentDataLoading, setIsStudentDataLoading] = useState(false)
  // const markstu = useRef(0)

  const navigate = useNavigate()
  const { id } = useParams()

  const {
    fristName,
    fatherName,
    grandFatherName,
    gender,
    grade,
    section,
    residency,
    school,
    mark,
  } = speceficStudent

  //!Handel Total mark

  // let arr = []
  // mark.map((ma) => arr.push(Number(ma[1])))
  // let totalMark = arr.reduce((perv, curr) => (curr = curr + perv), 0)

  useEffect(
    function () {
      async function fetchStudent() {
        try {
          setIsStudentDataLoading(true)
          const res = await fetch(`${URL}/${id}`)
          const data = await res.json()

          setSpeceficStudent(data)
        } catch (err) {
          console.log(err.message)
        } finally {
          setIsStudentDataLoading(false)
        }
      }
      fetchStudent()
    },
    [id]
  )

  return (
    <>
      <SideMenu />
      {isStudentDataLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          <>
            <p
              className={styles.arrowBack}
              title="Go Back"
              onClick={() => navigate(-1)}
            >
              &larr;
              <span>Go Back</span>
            </p>
            <h2>Student Info</h2>
            <div className={styles.container}>
              <div className={styles.boxOne}>
                <img src="../../public/img/img-2.jpg" alt="" />
                <p>
                  {capitalizedName(
                    `${fristName} ${fatherName} ${grandFatherName}`
                  )}
                </p>
                <span>Gender: {gender == "M" ? "Male" : "Female"}</span>

                <span>Age: 21</span>
                <span>
                  Section:{grade}
                  <sup>th</sup>
                  {section}
                </span>
                <span>Residence Name: {capitalizedName(residency)} </span>
                <span>School: {capitalizedName(school)}</span>
              </div>
              <div className={styles.boxTwo}>
                {mark?.map((stud, index) => {
                  return (
                    <div key={index}>
                      <p> {`${stud[0]}`.toUpperCase()}</p>{" "}
                      <span>{stud[1]}</span>
                    </div>
                  )
                })}

                <div>
                  <p>Total: </p>
                  <span>{100}</span>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  )
}

export default SpecficStu
