import { Link } from "@remix-run/react";

interface Props {
  label: string;
  linkTo: string;
}

export const Badge = ({ label, linkTo }: Props) => {
  return (
    <div className="not-prose">
      <Link
        to={linkTo}
        className="no-underline relative inline-block text-sm font-medium text-blue-700 group"
      >
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-700 group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative block px-4 py-2 bg-white border border-current">
          {label}
        </span>
      </Link>
    </div>
  );
};
