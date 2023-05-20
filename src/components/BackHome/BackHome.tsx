import React from "react";
import Link from "next/link";

interface BackHomeProps {
  label: string;
}

const BackHome = ({ label }: BackHomeProps) => {
  return (
    <h2 className="text-center">
      <Link href="/">{label}</Link>
    </h2>
  );
};

export default BackHome;
