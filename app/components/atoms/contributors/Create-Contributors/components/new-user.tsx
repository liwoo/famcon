import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRightIcon, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Role from "./Role";
import { ContributorInfoForm } from "../contributor-info-form";

export function AddContributor() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-teal-900">
          <Plus /> Add Contributor
        </Button>
      </SheetTrigger>
      <SheetContent className="w-auto">
        <SheetHeader className="flex flex-col items-start">
          <SheetTitle className="flex gap-4 items-center">
            <ArrowRightIcon className="s-8 font-bold" />
            <h1 className="font-[500] text-[18px]">Create New Contributor</h1>
          </SheetTitle>
          {/* description */}
          <SheetDescription>
            <div className="flex items-center gap-6 mt-6">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2 text-start h-auto">
                <h1 className="text-[16px] text-black">
                  Upload Profile Picture
                </h1>
                <p className="text-[12px]">
                  This profile will be visible to all employees, so please
                  ensure it reflexts a professional and polished image.
                </p>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="my-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[16px] text-black">Contributor Information</h1>
            <ContributorInfoForm />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
