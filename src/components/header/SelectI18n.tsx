import { Languages } from "lucide-preact";
import { useState } from "preact/hooks";

export const SelectI18N = () => {
  const languages = [
    { value: "en", label: "English", href: "/" },
    { value: "es", label: "Español", href: "/es" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative inline-block text-left">
      <button
        class="p-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        onClick={toggleDropdown}
      >
        <Languages className="size-4" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {languages.map((language) => (
            <a
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
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
