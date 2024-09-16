import { useNavigate } from "react-router-dom"
import SideMenu from "../Components/SideMenu"
import styles from "./SpecficStu.module.css"

function SpecficStu() {
  const navigate = useNavigate()
  return (
    <>
      <SideMenu />
      <div className={styles.wrapper}>
        <p
          className={styles.arrowBack}
          title="Go Back"
          onClick={() => navigate(-1)}
        >
          &larr;
        </p>
        <h2>Student Info</h2>

        <div className={styles.container}>
          <div className={styles.boxOne}>
            <img src="../../public/img/img-2.jpg" alt="" />
            <p>Samuel Tale Dejene</p>
            <span>Gender: Male</span>
            <span>Age: 21</span>
            <span>
              Section: 9<sup>th</sup>A
            </span>
            <span>Residence Name: Mehal meda </span>
            <span>School: Mehal meda secondary school</span>
          </div>
          <div className={styles.boxTwo}>
            <div>
              <p> Math:</p> <span>80</span>
            </div>
            <div>
              <p>English:</p> <span>93</span>
            </div>
            <div>
              <p>Amahric:</p> <span>89</span>
            </div>
            <div>
              <p>Biology:</p> <span>95</span>
            </div>
            <div>
              <p> Chemistry:</p> <span>95</span>
            </div>
            <div>
              <p>Physics:</p> <span>89</span>
            </div>
            <div>
              <p>Sport:</p> <span>84</span>
            </div>
            <div>
              <p>Total: </p>
              <span>512</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecficStu
