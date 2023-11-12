import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import NewUserPage from "../../pages/NewUserPage/NewUserPage";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/añadir" element={<NewUserPage />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};
export default App;
