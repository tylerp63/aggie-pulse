import Navbar from "@/components/Navbar";
import React from "react";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <>
      <Navbar />
      <Input placeholder="Search for org..." />
    </>
  );
};

export default page;
