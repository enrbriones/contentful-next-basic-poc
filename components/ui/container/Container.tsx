export const Container = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="container mx-auto mt-6">{children}</div>;
};
