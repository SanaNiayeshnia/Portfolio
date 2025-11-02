import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/app/_components/ui/multi-select";

function CustomMultiSelect({
  label = "",
  placeholder = "",
  options = [],
  className = "",
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <MultiSelect>
        <MultiSelectTrigger
          className={`bg-white rounded-full border-2 border-black w-full ${className}`}
        >
          <MultiSelectValue
            placeholder={placeholder}
            overflowBehavior="cutoff"
          />
        </MultiSelectTrigger>
        <MultiSelectContent className="border-1">
          <MultiSelectGroup>
            {" "}
            {options?.map((opt, index) => (
              <MultiSelectItem
                value={opt?.value}
                key={index}
                className="cursor-pointer "
              >
                {opt?.label}
              </MultiSelectItem>
            ))}
          </MultiSelectGroup>
        </MultiSelectContent>
      </MultiSelect>
    </div>
  );
}

export default CustomMultiSelect;
