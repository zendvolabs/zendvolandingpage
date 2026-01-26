import { FC } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDown, Check } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface IconSelectProps {
  label: string;
  value: SelectOption;
  options: SelectOption[];
  onChange?: (value: SelectOption) => void;
}

const IconSelect: FC<IconSelectProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="relative">
      {/* Floating label */}
      <label className="absolute -top-2.5 left-4 px-2 bg-white text-xs text-[#9CA3AF] py-0.5 z-10">
        {label}
      </label>

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          {/* Button */}
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg border border-gray-200 bg-white py-3 pl-4 pr-10 text-left text-sm focus:outline-none focus:ring focus:ring-[#5A42DE]">
            <span className="flex items-center gap-2">
              {value.icon && <span>{value.icon}</span>}
              <span>{value.label}</span>
            </span>

            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </Listbox.Button>

          {/* Options */}
          <Listbox.Options className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-indigo-50 text-indigo-600" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <div className="flex items-center gap-2">
                    {option.icon && <span>{option.icon}</span>}
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.label}
                    </span>

                    {selected && (
                      <Check className="absolute right-4 h-4 w-4 text-indigo-600" />
                    )}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default IconSelect;
