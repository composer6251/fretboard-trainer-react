import { BrowserRouter, Route } from "react-router-dom";
import LoginComponent from "../pages/login/login.component";
import FretboardPage from "../pages/fretboard-trainer/fretboard-trainer.component";
import SightReadingPage from "../pages/sight-reading/sight-reading.component";
import LearnTheoryPage from "../pages/learn-theory/learn-theory.component";
import WrapperPageComponent from "../pages/wrapper-page/wrapper-page.component";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
// TODO: add wrapper route for '/' path?

// TODO: Add layout route for navigation
root.render(
    <BrowserRouter> creates history, puts initial location into state
        <Routes>
            <Route path="/" element={WrapperPageComponent}>
                <Route path="/login" element={LoginComponent}/>
                <Route path="/fretboardnotetrainer" element={FretboardPage}/>
                <Route path="/sightreading" element={SightReadingPage}/>
                <Route path="/learntheory" element={LearnTheoryPage}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
