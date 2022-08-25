import "./App.css";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
