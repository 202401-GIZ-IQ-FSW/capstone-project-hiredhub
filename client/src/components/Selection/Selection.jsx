import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

const Selection = ({ name, placeholder, options, label }) => (
  <Field name={name}>
    {({ field, form, meta }) => (
      <div>
        <Select
          value={field.value || ""}
          onValueChange={(value) => form.setFieldValue(name, value)}
          
        >
          <SelectTrigger
            className="bg-[#F8FAFC] text-gray-500"
            onBlur={() => form.setFieldTouched(name, true)}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value} label={option.label}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="min-h-6 mb-2">
          {meta.touched && meta.error && (
            <div className="text-red-600 text-sm pt-1">
              <ErrorMessage name={name} />
            </div>
          )}
        </div>
      </div>
    )}
  </Field>
);

export default Selection;
