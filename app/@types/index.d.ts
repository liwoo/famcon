import { LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  children?: NavItemProps[];
}

interface ContributorsDetailsProps {
  title: string;
  value: string;
  color: string;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

export interface DataTableFilterField<TData> {
  label: string;
  value: keyof TData;
  placeholder?: string;
  options?: Option[];
}

export interface DataTableFilterOption<TData> {
  id: string;
  label: string;
  value: keyof TData;
  options: Option[];
  filterValues?: string[];
  filterOperator?: string;
  isMulti?: boolean;
}
