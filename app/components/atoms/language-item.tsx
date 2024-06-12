import type { HTMLProps } from "react";

interface LanguageItemProps extends HTMLProps<HTMLDivElement> {
  languageProp: string;
}

export const LanguageItem = ({ languageProp, ...props }: LanguageItemProps) => {
  return (
    <button {...props}>
      <h1>{languageProp}</h1>
    </button>
  );
};
