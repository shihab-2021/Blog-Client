import { LoaderCircleIcon } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full p-10 my-10 mx-auto">
      <LoaderCircleIcon className="w-16 h-16 animate-spin mx-auto" />
    </div>
  );
}
