import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import React from "react";

interface BreadcrumbsPropTypes {
  breadcrumbs: { label: string; href?: string }[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsPropTypes) => {
  return (
    <Breadcrumb>
      {breadcrumbs.map((breadcrumb, index) => (
        <Breadcrumb.Item>
          <Link
            href={breadcrumb?.href ?? "#"}
            className={`${
              breadcrumbs.length === index + 1 ? "font-semibold" : ""
            }`}
          >
            {breadcrumb.label}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
