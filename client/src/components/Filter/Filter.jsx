import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

function Filter({ name, label, options, value, onChange }) {
  return (
      <div className="grid gap-3">
        <Label htmlFor={name} className="lg:text-md md:text-sm font-semibold text-neutral-700">{label}</Label>
        <Select value={value} onValueChange={(val) => onChange(name, val)}>
          <SelectTrigger id={name} aria-label={`Select ${label}`} className="bg-[#f8fafc]">
            <SelectValue placeholder={`Select ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options &&
              options.map((option, index) => (
                <SelectItem
                  key={index}
                  value={option.value !== "" ? option.value : "all"}
                >
                  {option.label}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
  );
}

export default Filter;
