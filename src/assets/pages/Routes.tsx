import {Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage.tsx";
import SecondPage from "./SecondPage.tsx";
import {AIItem} from "../../App.tsx";
import ThirdPage from "./ThirdPage.tsx";
import LoginPage from "./LoginPage.tsx";

interface Props {
    items: AIItem[];
    isLogin: boolean;
    handleLogin: () => void;
}

export default ({items, isLogin, handleLogin}: Props) => {
    return <Routes>
        <Route path='/' element={<FirstPage items={items} isLogin={isLogin}/>}/>
        <Route path='/item' element={<SecondPage item={items[0]}/>}/>
        <Route path='/save' element={<ThirdPage AIImage={items[0].AIImage}/>}/>
        <Route path='/login' element={<LoginPage handleLogin={handleLogin}/>}/>
    </Routes>
}