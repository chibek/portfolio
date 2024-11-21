import { Languages } from "lucide-preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { cn } from "../../lib/utils";

export const SelectI18N = () => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const languages = [
    { value: "en", label: "English", href: "/" },
    { value: "es", label: "Español", href: "/es" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <button
        className={cn("flex items-bottom rounded-lg p-2 ring-primary", {
          "ring-1": isOpen,
        })}
        onClick={toggleDropdown}
      >
        <span class="flex-none">
          <Languages className="size-5 " />
        </span>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute right-0 mt-2 overflow-hidden rounded-md shadow-lg border bg-background"
        >
          {languages.map((language) => (
            <a
              onClick={toggleDropdown}
              className="block px-4 py-2 text-sm hover:bg-secondary"
              href={language.href}
            >
              {language.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
