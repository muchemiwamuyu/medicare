import React from 'react'
import { useState } from 'react';
import { FormStep1, FormStep2, FormStep3, FormStep4, FormStep5 } from './MultistepForm';

function StepTracker({ currentStep }) {
    const steps = ['Step one', 'Step two', 'Step three', 'Step 4', 'Step 5'];

    return (
        <div className="w-full flex items-center justify-center mt-8">
            <div className="flex items-center gap-4 text-white/50">
                {steps.map((label, index) => {
                    const isCompleted = index < currentStep;
                    const isActive = index === currentStep;

                    return (
                        <div key={index} className="flex items-center">
                            {/* Circle */}
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-md transition-all duration-300
                                    ${isCompleted ? 'bg-green-500 scale-105' : isActive ? 'bg-blue-500 scale-105' : 'bg-gray-300'}
                                `}
                            >
                                {index + 1}
                            </div>

                            {/* Label */}
                            <span className={`ml-2 text-sm font-medium transition-colors ${isActive || isCompleted ? 'text-gray-800' : 'text-gray-500'}`}>
                                {label}
                            </span>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div
                                    className={`w-16 h-[3px] mx-2 rounded-full transition-colors duration-300
                                        ${isCompleted ? 'bg-green-500' : isActive ? 'bg-blue-500' : 'bg-gray-300'}
                                    `}
                                ></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function AdminContainer() {

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        <FormStep1 next={() => setCurrentStep(1)} />,
        <FormStep2 next={() => setCurrentStep(2)} back={() => setCurrentStep(0)} />,
        <FormStep3 next={() => setCurrentStep(3)} back={() => setCurrentStep(1)} />,
        <FormStep4 next={() => setCurrentStep(4)} back={() => setCurrentStep(2)} />,
        <FormStep5 back={() => setCurrentStep(3)} />
    ]


  return (
        <div className="w-full flex flex-col mt-[3%]">
            {/* Tracker at the top */}
            <div className="w-full py-6">
                <StepTracker currentStep={currentStep} />
            </div>

            {/* Forms section */}
            <section className="w-full h-1/2 absolute bottom-0 flex items-center justify-center">
                {steps[currentStep]}
            </section>
        </div>
    );
}

export default AdminContainer