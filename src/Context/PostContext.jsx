import { createContext, useContext } from "react"
import PropTypes from "prop-types"

const PostContext = createContext()

//? This only runs on runtime not build time, to run at build time we need to use typescript
PostContextProvider.propTypes = {
  children: PropTypes.object,
}

const PostContextProvider = ({ children }) => {
  const value = {}
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

function usePost() {
  const usePost = useContext(PostContext)

  return usePost
}
export { PostContextProvider, usePost }
