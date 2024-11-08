import React, { forwardRef, ReactElement, Ref } from "react";
import { FormItemProps } from "../types";
import "./FormInput.css";

export const FormInput = forwardRef<HTMLInputElement, FormItemProps>(
  function FormInput(
    props: FormItemProps,
    ref: Ref<HTMLInputElement>
  ): ReactElement {
    return (
      <div className='formInputWrapper'>
        <label>{props.label}</label>
        <input
          ref={ref}
          type={props.type || "text"}
          min={0}
          placeholder={props.placeholder}
        ></input>
      </div>
    );
  }
);
