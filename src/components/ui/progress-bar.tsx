"use client"

import { cn } from "@/lib/utils"

export interface ProgressBarProps {
  value: number
  min?: number
  max?: number
  className?: string
  progressClassName?: string
  valueFormatter?: (value: number, valueInPercentage: number) => string | number
}

export const ProgressBarBase = ({
  value,
  min = 0,
  max = 100,
  className,
  progressClassName,
}: ProgressBarProps) => {
  const percentage = ((value - min) * 100) / (max - min)

  const backgroundSize = percentage > 0 ? (100 / percentage) * 100 : 400

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      style={{
        boxShadow: "0px 0px 4px 0px #00000014 inset",
      }}
      className={cn(
        "h-4 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
    >
      <div
        style={{
          width: `${Math.max(6, percentage)}%`,
          background:
            "linear-gradient(90deg, #FF6969, #FF6969, #FFBC70, #FFBC70, #7EFF7E, #7EFF7E)",
          backgroundSize: `${backgroundSize}% 100%`,
          backgroundPosition: "0 0",
        }}
        className={cn(
          "h-full rounded-full transition-all duration-200 ease-linear",
          value === 0 && "rounded-xl",
          progressClassName
        )}
      />
    </div>
  )
}

type ProgressBarLabelPosition =
  | "right"
  | "bottom"
  | "top-floating"
  | "bottom-floating"

export interface ProgressIndicatorWithTextProps extends ProgressBarProps {
  labelPosition?: ProgressBarLabelPosition
}

export const ProgressBar = ({
  value,
  min = 0,
  max = 100,
  valueFormatter,
  labelPosition,
  className,
  progressClassName,
}: ProgressIndicatorWithTextProps) => {
  const percentage = ((value - min) * 100) / (max - min)
  const formattedValue = valueFormatter
    ? valueFormatter(value, percentage)
    : `${percentage.toFixed(0)}%`

  const baseProgressBar = (
    <ProgressBarBase
      min={min}
      max={max}
      value={value}
      className={className}
      progressClassName={progressClassName}
    />
  )

  switch (labelPosition) {
    case "right":
      return (
        <div className="flex items-center gap-3">
          {baseProgressBar}
          <span className="shrink-0 text-sm font-medium text-secondary tabular-nums">
            {formattedValue}
          </span>
        </div>
      )
    case "bottom":
      return (
        <div className="flex flex-col items-end gap-2">
          {baseProgressBar}
          <span className="text-sm font-medium text-secondary tabular-nums">
            {formattedValue}
          </span>
        </div>
      )
    case "top-floating":
      return (
        <div className="relative flex flex-col items-end gap-2">
          {baseProgressBar}
          <div
            style={{ left: `${percentage}%` }}
            className="bg-primary_alt ring-secondary_alt absolute -top-2 -translate-x-1/2 -translate-y-full rounded-lg px-3 py-2 shadow-lg ring-1"
          >
            <div className="text-xs font-semibold text-secondary tabular-nums">
              {formattedValue}
            </div>
          </div>
        </div>
      )
    case "bottom-floating":
      return (
        <div className="relative flex flex-col items-end gap-2">
          {baseProgressBar}
          <div
            style={{ left: `${percentage}%` }}
            className="bg-primary_alt ring-secondary_alt absolute -bottom-2 -translate-x-1/2 translate-y-full rounded-lg px-3 py-2 shadow-lg ring-1"
          >
            <div className="text-xs font-semibold text-secondary">
              {formattedValue}
            </div>
          </div>
        </div>
      )
    default:
      return baseProgressBar
  }
}
