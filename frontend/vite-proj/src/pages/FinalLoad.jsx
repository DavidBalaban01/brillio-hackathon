import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

export default function FinalLoad({ setLoading }) {
  return (
    <div
      className="flex h-[250px] w-[400px] items-center justify-center rounded-lg bg-white p-6 shadow-lg"
      style={{ width: "700px", height: "500px", margin: "0px auto" }}
    >
      <Lottie
        className="w-[100px]"
        animationData={loadingAnimation}
        loop={true}
      />
      <h3 className="font-title mb-4 text-xl text-neutral-950"></h3>
    </div>
  );
}
