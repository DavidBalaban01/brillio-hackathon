import Lottie from 'lottie-react';
import loadingAnimation from "../assets/loading.json"

export default function FinalLoad({ setLoading }) {
    return (
        <div className="min-h-[600px] w-[400px] rounded-lg shadow-lg flex justify-center items-center">
            <Lottie className="w-[100px]" animationData={loadingAnimation} loop={true} />
            <h3 className="font-title mb-4 text-xl text-neutral-950"></h3>
        </div>
    )
}