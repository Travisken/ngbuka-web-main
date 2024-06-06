import { Button, InputBox, Text } from "@/components/Atoms";
import Link from "next/link";

const DeleteAccountPage = ({ searchParams }) => {
  const confirmWithPassword = searchParams.enterpassword;
  const deleteReas = [
    {
      id: 1,
      content: "I have  privacy concerns",
    },
    {
      id: 2,
      content: "My deliveries don’t match my orders",
    },
    {
      id: 3,
      content: "I don’t need the app anymore",
    },
    {
      id: 4,
      content: "I have not been able to book a mechanic",
    },
    {
      id: 5,
      content: "Mechanics take too long to show-up",
    },
    {
      id: 6,
      content: "My complaints keep being ignored",
    },
    {
      id: 7,
      content: "Your design is so blinding I can’t seeeee",
    },
    {
      id: 8,
      content: "Another reason",
    },
  ];

  return (
    <section>
      <div className="bg-white p-5 rounded-2xl">
        <Text
          fontSize="standard"
          variant="standard"
          className="text-2xl"
          fontWeight="font-[700]"
          textColor="text-text-primary-50"
        >
          Delete account
        </Text>
      </div>

      {confirmWithPassword ? (
        <div className="bg-white rounded-2xl py-10 grid gap-10 px-24 mt-10">
          <div>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base"
              fontWeight="font-[600]"
              textColor="text-text-primary-50"
            >
              Enter your password to confirm its you and delete your account
            </Text>
            <InputBox type="password" className="mt-1" placeholder="Password" />
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="/myaccount/deleteaccount?enterpassword=true"
              className="bg-danger py-[10px] w-full text-center text-white rounded-full"
            >
              Delete my acount
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-10 pt-10">
          <div className="bg-white p-10 grid gap-2 rounded-2xl">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-2xl text-center"
              fontWeight="font-[600]"
              textColor="text-text-primary-50"
            >
              We’ll be sad to let you go.
            </Text>
            <Text
              fontSize="standard"
              variant="standard"
              className="text-base"
              fontWeight="font-[400]"
              textColor="text-text-primary-50"
            >
              Before you delete you’re account, please note that deleting your
              account will erase all your data including payment information,
              personal information, addresses, etc. You will no longer be
              offered any of our services once this action is complete
            </Text>
          </div>

          <div className="bg-white p-10 grid gap-5 rounded-2xl">
            <Text
              fontSize="standard"
              variant="standard"
              className="text-lg"
              fontWeight="font-[600]"
              textColor="text-text-primary-50"
            >
              We’d like to know why you’re deleting your account
            </Text>
            <div className="grid gap-5">
              {deleteReas.map((reason, index) => (
                <div className="" key={index}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      className="w-5 h-5"
                      name={reason.content}
                      id={index}
                    />
                    <Text
                      fontSize="standard"
                      variant="standard"
                      className="text-base"
                      fontWeight="font-[400]"
                      textColor="text-text-primary-50"
                    >
                      {reason.content}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <Text
                fontSize="standard"
                variant="standard"
                className="text-lg pb-3"
                fontWeight="font-[600]"
                textColor="text-text-primary-50"
              >
                Additional information
              </Text>
              <textarea
                name="what happened"
                id="1"
                cols="30"
                rows="5"
                placeholder="Tell us what happened"
                className="border border-border-25 rounded-[20px] p-3 w-full"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="/myaccount/deleteaccount?enterpassword=true"
              className="bg-danger py-[10px] lg:w-[350px] text-center text-white rounded-full"
            >
              Delete my acount
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeleteAccountPage;
