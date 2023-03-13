import logo from "../media/thanks.png";

export const OrderConfirmation = () => {
  return (
    <div>
      <div class="h-screen pt-5">
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg bg-white p-6 md:w-2/3">
            <div class="flex flex-col text-center justify-center gap-3">
              <div>
                <h1 class="text-center text-2xl font-bold">Order Confirmed!</h1>
              </div>
              <div>
                <p>
                  Check your email for a confirmation, it should arrive in a few
                  minutes
                </p>
              </div>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
