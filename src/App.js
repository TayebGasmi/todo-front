import "./App.css";
import LoginForm from "./components/loginForm/LoginForm";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/signupForm/SignUpForm";
import RestPasswordForm from "./components/restPasswordForm/RestPasswordForm";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<SignUpForm />} />
      <Route path="/restPassword" element={<RestPasswordForm />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Todo></Todo>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
