import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

export function CustomSelect({
  label = "",
  options = [],
  placeholder = "",
  filterName = "",
}) {
  return (
    <div>
      <label className="font-medium text-sm mb-1">{label}</label>
      <Select>
        <SelectTrigger className="w-[180px] bg-white border-2 rounded-full border-black">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="border-2">
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options?.map((opt, index) => (
              <SelectItem value={opt?.value} key={index}>
                {opt?.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
