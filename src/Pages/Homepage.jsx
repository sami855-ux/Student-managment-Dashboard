import Header from "../Components/Header"
import HomeMain from "../Components/HomeMain"
import SideMenu from "../Components/SideMenu"
import styles from "./Homepage.module.css"

function Homepage() {
  return (
    <div className={styles.wrapper}>
      <SideMenu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "270px",
        }}
      >
        <Header />
        <HomeMain />
      </div>
    </div>
  )
}

export default Homepage
