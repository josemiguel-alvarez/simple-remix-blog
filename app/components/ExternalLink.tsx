interface Props {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink = ({ href, children }: Props) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
