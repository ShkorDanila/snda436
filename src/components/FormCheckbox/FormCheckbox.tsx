import React, { forwardRef, ReactElement, Ref } from "react";
import { FormItemProps } from "../types";
import "./FormCheckbox.css";

export const FormCheckbox = forwardRef<HTMLInputElement, FormItemProps>(
  function FormInput(
    props: FormItemProps,
    ref: Ref<HTMLInputElement>
  ): ReactElement {
    return (
      <div className='formCheckboxWrapper'>
        <label>{props.label}</label>
        <input type='checkbox'></input>
      </div>
    );
  }
);
