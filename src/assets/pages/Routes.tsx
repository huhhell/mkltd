import {Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage.tsx";


export default () => {
    return <Routes>
        <Route path='/' element={<FirstPage />}/>
    </Routes>
}