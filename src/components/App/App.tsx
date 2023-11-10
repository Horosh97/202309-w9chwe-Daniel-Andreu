import { Navigate, Route, Routes } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};
export default App;
