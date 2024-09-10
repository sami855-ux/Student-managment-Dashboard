import { useNavigate } from "react-router-dom"
import styles from "./Pagenotfound.module.css"
function Pagenotfound() {
  const naviagte = useNavigate()
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src="public/img/koala.png" alt="" />
        <p>Page Not Found</p>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nobis
          earum quos, facere veritatis consequuntur velit laboriosam iste
          reiciendis. Sapiente sint, nulla corrupti fugit excepturi dolorem
          aliquam. <br /> <br />
          Possimus aliquid nesciunt eum dolorum, natus facere officiis incidunt
          error? Alias, sunt ipsum?
        </span>
        <button onClick={() => naviagte(-1)}>Back &larr;</button>
      </div>
    </div>
  )
}

export default Pagenotfound
