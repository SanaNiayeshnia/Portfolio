"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useOptimistic } from "react";
import { TbX } from "react-icons/tb";

export function CustomSelect({
  label = "",
  options = [],
  placeholder = "",
  filterName = "",
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentValue = searchParams.get(filterName) || "";
  const [optimisticValue, setOptimisticValue] = useOptimistic(
    currentValue,
    (_, newValue) => newValue
  );

  function changeFilter(selectedValue) {
    setOptimisticValue(selectedValue);
    const sp = new URLSearchParams(searchParams);
    sp.set(filterName, selectedValue);
    router.replace(`${pathname}?${sp.toString()}`);
  }

  function removeFilter() {
    setOptimisticValue("");
    const sp = new URLSearchParams(searchParams);
    sp.delete(filterName);
    router.replace(`${pathname}?${sp.toString()}`);
  }

  return (
    <div className="relative">
      <label className="font-medium text-sm mb-1">{label}</label>
      <Select value={optimisticValue} onValueChange={changeFilter}>
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
      {!!optimisticValue && (
        <button
          className="absolute bottom-2.5 right-8 rounded-full text-sm cursor-pointer bg-black text-white border-2 hover:bg-amber-200 hover:text-black transition-all duration-300"
          onClick={removeFilter}
        >
          <TbX />
        </button>
      )}
    </div>
  );
}
