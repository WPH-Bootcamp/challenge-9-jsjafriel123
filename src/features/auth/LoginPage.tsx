import AuthTabs from "./AuthTabs";

const LoginPage = () => {
  return (
    <section className="flex justify-center min-h-screen w-full overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center w-[393px] h-[844px] lg:w-[1440px] lg:h-[1024px]">
        <img
          src="\assets\hero-Login.svg"
          alt="Logo"
          className="hidden lg:flex lg:size-cover"
        ></img>
        <div className="flex flex-col w-[345px] h-[554px] gap-3 lg:w-[374px] lg:h-[642px]">
          <img
            src="\assets\logo-frame-red.svg"
            alt="Logo"
            className="flex w-[115px] h-[32px] lg:w-[150px] lg:h-[42px]"
          />
          <h2 className="font-extrabold text-[24px]/[36px] lg:text-[28px]/[38px] ">
            Welcome Back
          </h2>
          <p className="font-medium text-[14px]/[28px] lg:text-[16px]/[30px]">
            Good to see you again! Let's eat
          </p>
          <AuthTabs />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
