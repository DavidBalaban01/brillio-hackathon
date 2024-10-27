import Lottie from "lottie-react";
import loadingAnimation from "../assets/finalLoading.json";

export default function FinalLoad2({ setLoading }) {
  return (
    <div className="finalLoad2 rounded-lg bg-white p-6 shadow-lg">
      <h1 className="font-title mb-2 text-xl text-neutral-950">
        Please wait until we process your information...
      </h1>
      <Lottie
        className="h-[540px] w-[400px]"
        animationData={loadingAnimation}
        loop={true}
      />
      <h3 className="font-title mb-4 text-xl text-neutral-950"></h3>
    </div>
  );
}
