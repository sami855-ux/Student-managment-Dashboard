import { useReducer, useState } from "react"
import PropTypes from "prop-types"
import styles from "./CreateStudent.module.css"

function reducer(state, action) {
  switch (action.type) {
    case "fristName":
      return {
        ...state,
        fristName: action.payload,
      }
    case "fatherName":
      return {
        ...state,
        fatherName: action.payload,
      }
    case "grandFatherName":
      return {
        ...state,
        grandFatherName: action.payload,
        isDone: state.fristName
          ? state.fatherName
            ? false
            : state.isDone
          : state.isDone,
      }

    default:
      throw new Error("Unkown Action is Performed")
  }
}

const initialState = {
  fristName: "",
  fatherName: "",
  grandFatherName: "",
  isDone: true,
}

function CreateStudent() {
  let [currStep, setCurrStep] = useState(1)
  const [{ fristName, fatherName, grandFatherName, isDone }, dispatch] =
    useReducer(reducer, initialState)

  const circleData = [1, 2, 3, 4, 5, 6]
  const completionMap = new Map()
  completionMap
    .set(1, "0")
    .set(2, "20%")
    .set(3, "40%")
    .set(4, "60%")
    .set(5, "80%")
    .set(6, "100%")

  const handelPerv = function () {
    setCurrStep(currStep === 1 ? 1 : --currStep)
  }

  function handelNext() {
    setCurrStep(currStep === circleData.length ? circleData.length : ++currStep)
  }

  return (
    <>
      <div className={styles.header}>
        <section>
          <h2>Admin Store</h2>
          <span>Everything to manage your students in one place, Join us</span>
        </section>

        <div className={styles.profile}>
          <img src="/img/img-2.jpg" alt="profile image" />
          <span>Samule Tale</span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.contianer}>
          <h2>Create a student</h2>
          <p>Create and add a new student into the school database</p>

          <div className={styles.stepWrapper}>
            <div className={styles.steps}>
              {circleData.map((circle, index) => (
                <button
                  className={`${styles.circles} ${
                    index < currStep ? styles.active : ""
                  }`}
                  key={index}
                >
                  {circle}
                </button>
              ))}
            </div>
            <div
              className={styles.progress}
              style={{
                width: `${completionMap.get(currStep)}`,
              }}
            >
              <span className={styles.indictor}></span>
            </div>
          </div>
          <form className={styles.form}>
            {currStep === 1 && (
              <Name
                fristName={fristName}
                fatherName={fatherName}
                grandFatherName={grandFatherName}
                isDone={isDone}
                dispatch={dispatch}
              />
            )}

            {currStep === 2 && <AboutStudent />}
            {currStep === 3 && <Grades />}
            {currStep === 4 && <Teacher />}
            {currStep === 5 && <ParentCondition />}
            {currStep === 6 && <Final />}
          </form>
          <div className={styles.buttons}>
            <button
              id={styles.perv}
              onClick={() => handelPerv()}
              disabled={currStep === 1 ? true : isDone}
            >
              Perv
            </button>
            {currStep === circleData.length ? (
              <button id={styles.next}>Add student</button>
            ) : (
              <button
                id={styles.next}
                onClick={handelNext}
                disabled={currStep === circleData.length ? true : isDone}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function Name({ fristName, fatherName, grandFatherName, dispatch }) {
  return (
    <>
      <section className={styles.input}>
        <label htmlFor="name">Student Frist Name*</label>
        <input
          type="text"
          name="name"
          placeholder="Frist name"
          value={fristName}
          onChange={(e) =>
            dispatch({ type: "fristName", payload: e.target.value })
          }
        />
      </section>
      <section className={styles.input}>
        <label htmlFor="name">Student Father Name*</label>
        <input
          type="text"
          name="name"
          placeholder="Father name"
          value={fatherName}
          onChange={(e) =>
            dispatch({ type: "fatherName", payload: e.target.value })
          }
        />
      </section>
      <section className={styles.input}>
        <label htmlFor="name">Student GrandFather Name*</label>
        <input
          type="text"
          name="name"
          placeholder="GrandFather name"
          value={grandFatherName}
          onChange={(e) =>
            dispatch({ type: "grandFatherName", payload: e.target.value })
          }
        />
      </section>
    </>
  )
}

Name.propTypes = {
  fristName: PropTypes.string,
  fatherName: PropTypes.string,
  grandFatherName: PropTypes.string,
  dispatch: PropTypes.func,
}

function AboutStudent() {
  return (
    <>
      <section className={styles.inputSpe}>
        <section className={styles.gender}>
          <label htmlFor="gender">Gender*</label>
          <div className="">
            <span>
              Male <input type="radio" name="gender" value="M" />
            </span>
            <span>
              Female <input type="radio" name="gender" value="F" />
            </span>
          </div>
        </section>
        <section className={styles.age}>
          <label htmlFor="name">Age*</label>
          <input type="number" name="name" placeholder="Age" />
        </section>
      </section>
      <section className={styles.input}>
        <label htmlFor="name">Residence Name*</label>
        <input type="text" name="name" placeholder="Residence name" />
      </section>
      <section className={styles.input}>
        <label htmlFor="name">School Name*</label>
        <input type="text" name="name" placeholder="School name" />
      </section>
    </>
  )
}

function Grades() {
  return (
    <>
      <section className={styles.input}>
        <label htmlFor="name">Grades*</label>
        <div className={styles.subject}>
          <article>
            <span>Math</span>
            <input type="text" />
          </article>
          <article>
            <span>English</span>
            <input type="text" />
          </article>
          <article>
            <span>Amharic</span>
            <input type="text" />
          </article>
          <article>
            <span>Biology</span>
            <input type="text" />
          </article>
          <article>
            <span>Chemistry</span>
            <input type="text" />
          </article>
          <article>
            <span>Phyiscs</span>
            <input type="text" />
          </article>
          <article>
            <span>Sport</span>
            <input type="text" />
          </article>
          <section className={styles.total}>
            <span>Total:</span>
            <input type="text" disabled placeholder="300" />
          </section>
        </div>
      </section>
    </>
  )
}

function Teacher() {
  return (
    <>
      <section className={styles.input}>
        <label htmlFor="name">Teacher Name*</label>
        <input type="text" name="name" placeholder="Teacher name" />
      </section>
      <section className={styles.input}>
        <label htmlFor="name">Occupation Field*</label>
        <input type="text" name="name" placeholder="Occupation Field" />
      </section>
    </>
  )
}

function ParentCondition() {
  return (
    <>
      <section className={styles.input}>
        <label htmlFor="name"> Father&apos;s occupation*</label>
        <input type="text" name="name" placeholder="Teacher name" />
      </section>
      <section className={styles.input}>
        <label htmlFor="name">Mother&apos;s occupation*</label>
        <input type="text" name="name" placeholder="Occupation Field" />
      </section>
      <section className={styles.input}>
        <label htmlFor="name">Living Status*</label>
        <input type="text" name="name" placeholder="Occupation Field" />
      </section>
    </>
  )
}

function Final() {
  return (
    <>
      <section className={styles.input}>
        <label htmlFor="name"> Father&apos;s occupation*</label>
        <input type="text" name="name" placeholder="Teacher name" />
      </section>
      <section className={styles.input}>
        <label htmlFor="name">Mother&apos;s occupation*</label>
        <input type="text" name="name" placeholder="Occupation Field" />
      </section>
      <section className={styles.input}>
        <label htmlFor="name">Living Status*</label>
        <input type="text" name="name" placeholder="Occupation Field" />
      </section>
    </>
  )
}

export default CreateStudent
