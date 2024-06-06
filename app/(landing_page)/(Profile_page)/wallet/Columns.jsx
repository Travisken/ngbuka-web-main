"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BsArrowLeftShort } from "react-icons/bs";
import { Text } from "@/components/Atoms";
import TransactionDetails from "@/components/Molecules/TransactionDetails";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className="justify-center flex">
        <div
          className={`${
            row.getValue("status").toLowerCase() === "successful"
              ? "bg-[#E6FFE6] border border-[#E6FFE6] text-success"
              : "text-danger border border-danger" &&
                row.getValue("status").toLowerCase() === "pending"
              ? "border bg-[#FFFADF] border-[#FFFADF] text-secondary-500"
              : "text-danger border border-danger" &&
                row.getValue("status").toLowerCase() === "refunded"
              ? "border bg-[#FFE7E7] border-[#FFE7E7] text-danger"
              : "text-danger border border-danger"
          } px-3 py-1 rounded-2xl w-fit capitalize`}
        >
          {row.getValue("status")}
        </div>
      </div>
    ),
  },
];

export const TransColumns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className="justify-center flex">
        <div
          className={`${
            row.getValue("status").toLowerCase() === "successful"
              ? "bg-[#E6FFE6] border border-[#E6FFE6] text-success"
              : "text-danger border border-danger" &&
                row.getValue("status").toLowerCase() === "pending"
              ? "border bg-[#FFFADF] border-[#FFFADF] text-secondary-500"
              : "text-danger border border-danger" &&
                row.getValue("status").toLowerCase() === "refunded"
              ? "border bg-[#FFE7E7] border-[#FFE7E7] text-danger"
              : "text-danger border border-danger"
          } px-3 py-1 rounded-2xl w-fit capitalize`}
        >
          {row.getValue("status")}
        </div>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;
    console.log(payment, 'transactions');
      return (
        <>
          <Sheet>
            <SheetTrigger>:</SheetTrigger>
            <SheetContent className="bg-white grid gap-3 rounded-es-xl">
              <SheetHeader className='pt-5'>
                <SheetTitle>
                  {" "}
                  <div className="flex items-center gap-2 border-b border-border-25 pb-2">
                    {/* <BsArrowLeftShort className="text-2xl" /> */}
                    <Text
                      fontSize="standard"
                      variant="standard"
                      className="text-lg px-2"
                      fontWeight="font-[600]"
                      textColor="text-text-primary-50"
                    >
                      Transaction details
                    </Text>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <TransactionDetails payment={payment}/>
            </SheetContent>
          </Sheet>
        </>
        // <div className="cursor-pointer">loading {payment.id}</div>
      );
    },
  },
];
