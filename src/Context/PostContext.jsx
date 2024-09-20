import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

import postData from "../PostData/posts"

const PostContext = createContext()

const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState(postData)

  const value = { post }
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

//? This only runs on runtime not build time, to run at build time we need to use typescript
PostContextProvider.propTypes = {
  children: PropTypes.object,
}
function usePost() {
  const usePost = useContext(PostContext)

  return usePost
}
export { PostContextProvider, usePost }
