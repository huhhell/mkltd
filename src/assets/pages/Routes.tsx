import {Route, Routes} from "react-router-dom";
import FirstPage from "./FirstPage.tsx";
import SecondPage from "./SecondPage.tsx";
import {AIItem} from "../../App.tsx";

interface Props {
    items: AIItem[];
}

export default ({items}: Props) => {
    return <Routes>
        <Route path='/' element={<FirstPage items={items}/>}/>
        <Route path='/item' element={<SecondPage item={items[0]}/>}/>
    </Routes>
}