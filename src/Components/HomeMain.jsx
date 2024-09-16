import styles from "./HomeMain.module.css"

function HomeMain() {
  return (
    <div className={styles.wrapper}>
      <MainOne />
    </div>
  )
}

function MainOne() {
  return (
    <div className={styles.list}>
      <section className={styles.promotion}>
        <p>Keep track and verify your marks</p>
        <span>
          The most used and visited admin store, which contains alots of cool
          features. check it out
        </span>
        <div className={styles["btn-wrapper"]}>
          <button className={`${styles.btn} ${styles.explore}`}>
            Explore More
          </button>
          <button className={`${styles.btn} ${styles.top}`}>
            Top Students
          </button>
        </div>
      </section>
      <section className={styles.activityWrapper}>
        <div>
          <h2>Latest Activities</h2>
          <span>View all &rarr;</span>
        </div>
        <ul>
          <ActivityList />
          <ActivityList />
          <ActivityList />
          <ActivityList />
          <ActivityList />
        </ul>
      </section>
    </div>
  )
}

function ActivityList() {
  return (
    <li className={styles.activity}>
      <span>
        <img src="public/img/bg.jpg" alt="" />
      </span>
      <div>
        <p>Admin user created</p>
        <span>by you</span>
      </div>
      <span>Jul 01, 2017 - 21:47</span>
    </li>
  )
}

export default HomeMain
