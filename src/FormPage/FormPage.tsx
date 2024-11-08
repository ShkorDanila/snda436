import { ReactElement, SyntheticEvent, useRef, useState } from "react";
import "./FormPage.css";
import { FormInput } from "../components/FormInput/FormInput";
import Multiplier from "../components/Multiplier/Multiplier";
import { FormTextarea } from "../components/FormTextarea/FormTextarea";
import { FormCheckbox } from "../components/FormCheckbox/FormCheckbox";
import { Link } from "react-router-dom";

export const FormPage = (): ReactElement => {
  const [isGeneratable, setIsGeneratable] = useState<boolean>(false);
  const [_, update] = useState<boolean>(false);

  const handleOnSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (
      Number(inputRef.current?.value) |
      Number(checkboxRef.current?.value) |
      Number(textareaRef.current?.value)
    ) {
      setIsGeneratable(true);
      update((prev) => !prev);
      return;
    }
    alert("Fill at least one field with valid data");
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLInputElement>(null);

  return (
    <div className='formPageWrapper'>
      <div className='formWrapper' onSubmit={handleOnSubmit}>
        <form>
          <FormInput
            ref={inputRef}
            label='Inputs'
            placeholder='count'
            type='number'
          />
          <FormInput
            ref={checkboxRef}
            label='Text areas'
            placeholder='count'
            type='number'
          />
          <FormInput
            ref={textareaRef}
            label='Checkboxes'
            placeholder='count'
            type='number'
          />

          <button className='submitButton'>Build</button>
        </form>
        {isGeneratable && (
          <form className='customFormWrapper'>
            <Multiplier
              count={Number(inputRef.current?.value)}
              keyPrefix='inputElement'
            >
              <FormInput label='Input' />
            </Multiplier>
            <Multiplier
              count={Number(checkboxRef.current?.value)}
              keyPrefix='textareaElement'
            >
              <FormTextarea label='Text Area' />
            </Multiplier>
            <Multiplier
              count={Number(textareaRef.current?.value)}
              keyPrefix='checkboxElement'
            >
              <FormCheckbox label='Checkbox' />
            </Multiplier>
          </form>
        )}
      </div>
      <Link to={"/"} className='mainPageLink'>
        Home
      </Link>
    </div>
  );
};
