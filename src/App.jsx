import { BrowserRouter, Route, Routes } from "react-router-dom"

import Homepage from "./Pages/Homepage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="*" element={<p>Page No found!</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
