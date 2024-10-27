import React from 'react';

const SegmentedProgressBar = ({ totalSteps, currentIndex }) => {
    const steps = Array.from({ length: totalSteps }, (_, index) => index);

    return (
        <div className="flex items-center">
            {steps.map((step) => {
                let bgColor = 'bg-gray-300';

                if (step < currentIndex) {
                    bgColor = 'bg-teal-500';
                } else if (step === currentIndex) {
                    bgColor = 'bg-blue-500';
                }

                return (
                    <div
                        key={step}
                        className={`flex-1 h-2 mx-1 ${bgColor} rounded-full`}
                    ></div>
                );
            })}
        </div>
    );
};

export default SegmentedProgressBar;
