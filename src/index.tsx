import React from 'react'
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "./components/Context"
import { store } from "./redux/store"
import { Provider } from "react-redux"

const rootElement = document.getElementById("root")
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <ContextProvider>
                    <App />
                </ContextProvider>
            </Provider>
        </BrowserRouter>
    )
}
