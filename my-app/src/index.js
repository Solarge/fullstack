import React from "react";
import ReactDom from "react-dom";

function App() {
    return <hi>Hello React Again!</hi>;
}

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);