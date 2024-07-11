import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { PlusIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ContributorInfoForm } from "../contributor-info-form";

export function AddContributor() {
  const [open, setOpen] = React.useState(false);
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-teal-900 flex gap-2">
          <PlusIcon className="size-6 font-bold" />
          Add Contributor
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[425px]">
        <SheetHeader>
          <SheetTitle>Create New Contributor</SheetTitle>
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

// TODO: form mobile we will use drawer
//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>
//         <Button variant="outline">Edit Profile</Button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader className="text-left">
//           <DrawerTitle>Edit profile</DrawerTitle>
//           <DrawerDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DrawerDescription>
//         </DrawerHeader>
//         <ProfileForm className="px-4" />
//         <DrawerFooter className="pt-2">
//           <DrawerClose asChild>
//             <Button variant="outline">Cancel</Button>
//           </DrawerClose>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
