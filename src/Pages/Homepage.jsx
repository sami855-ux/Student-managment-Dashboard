import Header from "../Components/Header"
import SideMenu from "../Components/SideMenu"
import styles from "./Homepage.module.css"

function Homepage() {
  return (
    <div className={styles.wrapper}>
      <SideMenu />
      <Header />
    </div>
  )
}

export default Homepage
