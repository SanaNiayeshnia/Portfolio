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
  values = [],
  onChange,
}) {
  return (
    <div className="relative">
      <label className="text-sm font-medium">{label}</label>
      <MultiSelect values={values} onValuesChange={onChange}>
        <MultiSelectTrigger
          className={`bg-white rounded-full border-2 border-black w-[300px] ${className}`}
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
