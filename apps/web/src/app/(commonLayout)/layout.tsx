const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;