import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LocateIcon, Pin } from "lucide-react";

const Role = () => {
  return (
    <Select>
      <SelectTrigger className="lg:w-[240px] w-[180px] bg-white">
        <Pin className="mr-2 h-4 w-4 text-green-600" />

        <SelectValue
          placeholder="Select a location"
          className="text-muted-foreground/50"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Location</SelectLabel>
          <SelectItem value="apple">Admin</SelectItem>
          <SelectItem value="banana">Basic Contributors</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Role;
