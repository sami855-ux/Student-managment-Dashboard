import { useNavigate, Link } from "react-router-dom"
import PropTypes from "prop-types"

import styles from "./Users.module.css"
import SideMenu from "../Components/SideMenu"
import { usePost } from "../Context/PostContext"

const Users = () => {
  const navigate = useNavigate()
  const { post } = usePost()
  return (
    <>
      <SideMenu />
      <div className={styles.wrapper}>
        <section className={styles["go-back"]} onClick={() => navigate(-1)}>
          <span>&larr;</span> Go Back
        </section>
        <div className={styles.postCont}>
          <h2>Posts</h2>
          <div className={styles.postTable}>
            <section className={styles.tableHeader}>
              <section className={styles.title}>Title</section>
              <section className={styles.author}>Author</section>
              <section className={styles.date}>Date</section>
              <section className={styles.date}>view</section>
            </section>
            <>
              {post.map((post, postIndex) => (
                <DataRow key={postIndex} post={post} />
              ))}
            </>
          </div>
        </div>
      </div>
    </>
  )
}

const DataRow = ({ post }) => {
  const date = new Date(post.date)
  const filterDate = date.toDateString()
  return (
    <section className={styles.dataRow}>
      <p className={styles.dataTitle}>{post.action}</p>
      <p className={styles.dataAuthor}>{post.Author}</p>
      <p className={styles.dataDate}>{filterDate}</p>
      <p className={styles.edit}>
        <Link to={`${post.id}`}>
          <span>Edit</span>
        </Link>
      </p>
    </section>
  )
}

DataRow.propTypes = {
  post: PropTypes.object,
}
export default Users
