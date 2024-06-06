import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button, InputBox, Text } from "../Atoms";
import { PiLockSimpleFill } from "react-icons/pi";
import { TiTimes } from "react-icons/ti";

const PasswordModal = () => {
  return (
    <>
      <DialogContent>
        <div className="flex flex-col text-center justify-center gap-5 w-fit">
          <div className="bg-white p-9 flex flex-col gap-9 rounded-2xl w-full max-w-[500px] lg:w-[500px]">
            <div>
              <div className="flex items-center gap-2 border-b border-border-25 pb-2">
                <PiLockSimpleFill className="text-secondary-800 text-2xl" />
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-lg"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Change password
                </Text>
              </div>
              <Text
                fontSize="standard"
                variant="standard"
                className="text-base mb-1 text-start pt-2"
                fontWeight="font-[400]"
                textColor="text-text-primary-50 "
              >
                Change your account password
              </Text>
            </div>
            <div className="flex flex-col gap-6">
              <div className="">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm text-start"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Current password
                </Text>
                <div className="border  rounded-full px-2 mt-1">
                  <InputBox
                    type="text"
                    className="border-none w-fit"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm text-start"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  New password
                </Text>
                <div className="border  rounded-full px-2 mt-1">
                  <InputBox
                    type="password"
                    className="border-none w-fit"
                    placeholder="New password"
                  />
                </div>
              </div>

              <div className="">
                <Text
                  fontSize="standard"
                  variant="standard"
                  className="text-sm text-start"
                  fontWeight="font-[600]"
                  textColor="text-text-primary-50"
                >
                  Confirm new password
                </Text>
                <div className="border  rounded-full px-2 mt-1">
                  <InputBox
                    type="password"
                    className="border-none w-fit"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            </div>
            <Button
              isDisabled
              className="bg-secondary-500 w-full disabled:bg-secondary-100 disabled:cursor-not-allowed"
            >
              Save address
            </Button>
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <div className="w-full flex items-center justify-center ">
                <div className="w-[60px] h-[60px] grid bg-white place-content-center cursor-pointer rounded-full">
                  <TiTimes />
                </div>
              </div>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </>
  );
};

export default PasswordModal;
