import { ReactElement, SyntheticEvent, useState } from "react";
import "./FormPage.css";

export const FormPage = (): ReactElement => {

    const [customFormElements, setCustomFormElements] = useState([<></>])

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCustomFormElements([<></>].concat(
            Array.from({length: e.currentTarget.inputCount.value}, (_, i) => <input id={`input-${i}`} placeholder="input"></input>),
            Array.from({length: e.currentTarget.textareaCount.value}, (_, i) => <textarea id={`textarea-${i}`} placeholder="input"></textarea>),
            Array.from({length: e.currentTarget.checkboxCount.value}, (_, i) => <input id={`checkbox-${i}`} type="checkbox" value={"Checkbox"}></input>))
         )
    }

    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit}>
                <label>Input</label>
                <input min={0} type="number" name="inputCount" placeholder="Count"></input>

                <label>Text Area</label>
                <input min={0} type="number" name="textareaCount" placeholder="Count"></input>

                <label>Checkbox</label>
                <input min={0} type="number" name="checkboxCount" placeholder="Count"></input>

                <button className="submitButton">Build</button>
            </form>
            <form className="customFormWrapper">
                {customFormElements}
            </form>
        </div>
    )
}

