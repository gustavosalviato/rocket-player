import ReactDOM from "react-dom/client"
import { App } from "./App"
import { globalStyles } from "./styles/global"

globalStyles()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
)
