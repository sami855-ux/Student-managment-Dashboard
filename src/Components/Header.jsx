import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.wrapper}>
      <section>
        <p>Welcome to Admin Store</p>
        <span>Hello samuel. Welcome back</span>
      </section>

      <div className={styles.searchWrap}>
        <div className={styles.search}>
          <svg
            stroke="currentColor"
            fill="#333"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
          <input type="text" placeholder="Search Dashboard" />
          <section className={styles.icon}>
            <svg
              stroke="#333"
              fill="#777"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="1.4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"></path>
            </svg>
          </section>
        </div>
        <section className={styles.icon}>
          <svg
            stroke="currentColor"
            fill="#333"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
          </svg>
        </section>
        <section className={styles.icon}>
          <svg
            stroke="currentColor"
            fill="#333"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
          </svg>
        </section>
      </div>
    </div>
  )
}

export default Header
