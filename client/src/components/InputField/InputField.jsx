import { Field, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const InputField = ({ id, name, placeholder, as = "input", style = ""}) => {
  const Component = as === "textarea" ? Textarea : Input;
  return (
    <Field name={name}> 
      {({ field, meta }) => (
        <>
          <Component {...field} id={id} placeholder={placeholder} className={style}/>
          <div className="min-h-6">{meta.touched && meta.error && (
            <div className="text-red-600 text-sm pt-1"><ErrorMessage name={name} /></div>
          )}</div>
        </>
      )}
    </Field>
  );
};

export default InputField;
