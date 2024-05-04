import React from "react"
import LiskHooks from "./Lisk-Hooks"
import Inc from "./inc-dec"
import List from "./listview"
import Quition from "./Quition"
import Registrationform from "./Registrationform"

let Homepage = React.lazy(() => (import("./homepage1")))



function ReactAssingment() {
  return (
    <div>
      <Quition />
      <br />

      <List />
      <br />

      <Inc />
      <br />

      <React.Suspense fallback={<><ul>
        <li>
          Create React app with modules and lazy loading
        </li>
      </ul></>}>
        <Homepage />

      </React.Suspense>

      <LiskHooks />

    </div>
  )
}

export default ReactAssingment