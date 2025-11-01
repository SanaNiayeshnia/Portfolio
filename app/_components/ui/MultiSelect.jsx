"use client";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/app/_components/ui/command";
import { Check } from "lucide-react";
import { cn } from "@/app/_lib/utils";
import { useState } from "react";

export function MultiSelect({ options = [] }) {
  const [selected, setSelected] = useState([]);

  function toggleOption(value) {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  return (
    <Command className="border rounded-lg w-[240px]">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandGroup>
          {options.map((opt) => (
            <CommandItem
              key={opt.value}
              onSelect={() => toggleOption(opt.value)}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selected.includes(opt.value) ? "opacity-100" : "opacity-0"
                )}
              />
              {opt.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
