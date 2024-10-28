const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="max-w-screen-xl w-full mx-auto flex-1">{children}</main>
  );
};

export default Main;
