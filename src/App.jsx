import { BrowserRouter, Route, Routes } from "react-router-dom"

import Homepage from "./Pages/Homepage"
import Pagenotfound from "./Components/Pagenotfound"
import Database from "./Pages/Database"
import CreateStudent from "./Pages/CreateStudent"
import SpecficStu from "./Pages/SpecficStu"
import Users from "./Pages/Users"

import { PostContextProvider } from "./Context/PostContext"

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/database" element={<Database />}></Route>
          <Route path="database/create" element={<CreateStudent />} />
          <Route path="database/student/:id" element={<SpecficStu />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  )
}

export default App
