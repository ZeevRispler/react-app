
import { createRoot } from "react-dom/client";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Chat from "./Chat";
import "./App.css";

const App = () => {
    return (
        <div className="app-flex">
            <Leftbar />
            <Chat />
            <Rightbar />
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);