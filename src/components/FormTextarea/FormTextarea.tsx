import React, { forwardRef, ReactElement, Ref } from "react";
import { FormItemProps } from "../types";
import "./FormTextarea.css";

export const FormTextarea = forwardRef<HTMLInputElement, FormItemProps>(
  function FormInput(
    props: FormItemProps,
    ref: Ref<HTMLInputElement>
  ): ReactElement {
    return (
      <div className='formTextareaWrapper'>
        <label>{props.label}</label>
        <textarea placeholder={props.placeholder}></textarea>
      </div>
    );
  }
);
