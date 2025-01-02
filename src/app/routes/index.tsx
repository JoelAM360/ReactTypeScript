import { BrowserRouter, Routes as Switch, Route , Navigate } from "react-router-dom";
import { DashBoard, Login } from "../pages/";

const Routes= () => {
  return (
    <BrowserRouter>
        <Switch>
             <Route path="/" element={<DashBoard />} />
             <Route path="entrar" element={<Login />} />

             <Route path="*" element={<Navigate to={"/"} />} />
        </Switch>
    </BrowserRouter>
  )
}

export default Routes