import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css"

export const MainPage = (): ReactElement => {
    return (
        <div className='mainWrapper'>
            <Link to={"form"} className='formPageLink'>FORM</Link>
        </div>
    )
}