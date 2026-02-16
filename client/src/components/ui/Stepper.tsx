import type { HTMLAttributes } from "react";

export interface Step {
  id: string;
  label: string;
  description?: string;
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep: number;
  variant?: "default" | "compact";
}

export function Stepper({
  steps,
  currentStep,
  variant = "default",
  className = "",
  ...props
}: StepperProps) {
  return (
    <div className={`w-full ${className}`} {...props}>
      <nav aria-label="Progress">
        <ol className="flex items-center justify-between">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            const isUpcoming = stepNumber > currentStep;

            return (
              <li
                key={step.id}
                className={`flex-1 ${index !== steps.length - 1 ? "relative" : ""}`}
              >
                {/* Connector line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-0.5 ${
                      isCompleted ? "bg-meli-blue" : "bg-meli-gray-300"
                    }`}
                    style={{ marginLeft: "50%" }}
                  />
                )}

                {/* Step content */}
                <div className="relative flex flex-col items-center">
                  {/* Step circle */}
                  <div
                    className={`
                      flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm z-10
                      ${isCompleted ? "bg-meli-blue text-white" : ""}
                      ${isCurrent ? "bg-meli-blue text-white ring-4 ring-blue-100" : ""}
                      ${isUpcoming ? "bg-meli-gray-200 text-meli-gray-600" : ""}
                    `}
                  >
                    {isCompleted ? (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      stepNumber
                    )}
                  </div>

                  {/* Step label */}
                  {variant === "default" && (
                    <div className="mt-2 text-center">
                      <div
                        className={`text-sm font-medium ${
                          isCurrent ? "text-meli-blue" : "text-meli-gray-900"
                        }`}
                      >
                        {step.label}
                      </div>
                      {step.description && (
                        <div className="text-xs text-meli-gray-600 mt-0.5">
                          {step.description}
                        </div>
                      )}
                    </div>
                  )}

                  {variant === "compact" && (
                    <div
                      className={`mt-1 text-xs font-medium ${
                        isCurrent ? "text-meli-blue" : "text-meli-gray-600"
                      }`}
                    >
                      {step.label}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
