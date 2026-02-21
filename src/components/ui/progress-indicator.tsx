"use client"

import Icons from "@/icons"
import { cn, sortCx } from "@/lib/utils"
import { useMemo } from "react"
import { Tooltip, TooltipTrigger } from "./tooltip"

interface ProgressBarProps {
  value: number
  min?: number
  max?: number
  size: "xxs" | "xs" | "sm" | "md" | "lg"
  label?: string
  valueFormatter?: (value: number, valueInPercentage: number) => string | number
}

const sizes = sortCx({
  xxs: {
    strokeWidth: 6,
    radius: 29,
    valueClass: "text-sm font-semibold text-primary",
    labelClass: "text-xs font-medium text-tertiary",
    halfCircleTextPosition: "absolute bottom-0.5 text-center",
  },
  xs: {
    strokeWidth: 16,
    radius: 72,
    valueClass: "text-display-xs font-semibold text-primary",
    labelClass: "text-xs font-medium text-tertiary",
    halfCircleTextPosition: "absolute bottom-0.5 text-center",
  },
  sm: {
    strokeWidth: 20,
    radius: 90,
    valueClass: "text-display-sm font-semibold text-primary",
    labelClass: "text-xs font-medium text-tertiary",
    halfCircleTextPosition: "absolute bottom-1 text-center",
  },
  md: {
    strokeWidth: 24,
    radius: 108,
    valueClass: "text-display-md font-semibold text-primary",
    labelClass: "text-sm font-medium text-tertiary",
    halfCircleTextPosition: "absolute bottom-1 text-center",
  },
  lg: {
    strokeWidth: 23,
    radius: 126,
    valueClass: "xl:text-6xl text-5xl font-bold",
    labelClass: "text-base font-semibold text-tertiary",
    halfCircleTextPosition: "absolute bottom-2 space-y-2 text-center",
  },
})

const colors = sortCx({
  low: "text-[#FF6A6A]",
  mid: "text-[#FFBC70]",
  good: "text-[#7EFF7E]",
})

export const ProgressBarCircle = ({
  value,
  min = 0,
  max = 100,
  size,
  label,
  valueFormatter,
}: ProgressBarProps) => {
  const percentage = Math.round(((value - min) * 100) / (max - min))

  const sizeConfig = sizes[size]

  const { strokeWidth, radius, valueClass, labelClass } = sizeConfig

  const diameter = 2 * (radius + strokeWidth / 2)
  const width = diameter
  const height = diameter
  const viewBox = `0 0 ${width} ${height}`
  const cx = diameter / 2
  const cy = diameter / 2

  const textPosition = label ? "absolute text-center" : "absolute text-primary"
  const strokeDashoffset = 100 - percentage

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        className="relative flex w-max items-center justify-center"
      >
        <svg
          className="-rotate-90"
          width={width}
          height={height}
          viewBox={viewBox}
        >
          {/* Background circle */}
          <circle
            className="stroke-bg-quaternary"
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            pathLength="100"
            strokeDasharray="100"
            strokeLinecap="round"
          />

          {/* Foreground circle */}
          <circle
            className="stroke-fg-brand-primary"
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            pathLength="100"
            strokeDasharray="100"
            strokeLinecap="round"
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        {label && size !== "xxs" ? (
          <div className="absolute text-center">
            <div className={labelClass}>{label}</div>
            <div className={valueClass}>
              {valueFormatter
                ? valueFormatter(value, percentage)
                : `${percentage}%`}
            </div>
          </div>
        ) : (
          <span className={cn(textPosition, valueClass)}>
            {valueFormatter
              ? valueFormatter(value, percentage)
              : `${percentage}%`}
          </span>
        )}
      </div>

      {label && size === "xxs" && <div className={labelClass}>{label}</div>}
    </div>
  )
}

export const ProgressBarHalfCircle = ({
  value,
  min = 0,
  max = 100,
  size,
  label,
  valueFormatter,
}: ProgressBarProps) => {
  const percentage = Math.round(((value - min) * 100) / (max - min))

  const sizeConfig = sizes[size]

  const {
    strokeWidth,
    radius,
    valueClass,
    labelClass,
    halfCircleTextPosition,
  } = sizeConfig

  const width = 2 * (radius + strokeWidth / 2)
  const height = radius + strokeWidth
  const viewBox = `0 0 ${width} ${height}`
  const cx = "50%"
  const cy = radius + strokeWidth / 2

  const strokeDashoffset = -50 - (100 - percentage) / 2

  const color = useMemo(() => {
    if (value > 0 && value <= 30) return colors["low"]
    if (value >= 31 && value <= 69) return colors["mid"]
    return colors["good"]
  }, [value])

  const needed = 70 - value

  return (
    <div className="flex flex-col items-center gap-0.5 xl:scale-115">
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        className="relative flex w-max items-center justify-center"
      >
        <Tooltip
          arrow
          title={
            <p className="max-w-44 text-sm">
              You need <strong>+{needed}</strong> points to reach a{" "}
              <strong className="text-[#00BA00]">good</strong> score of{" "}
              <strong>70</strong>
            </p>
          }
        >
          <TooltipTrigger className="absolute top-0 right-0 -translate-x-14 translate-y-3.5">
            <Icons.Divider className="" />
          </TooltipTrigger>
        </Tooltip>
        <svg width={width} height={height} viewBox={viewBox}>
          <defs>
            <linearGradient
              id="progressGradientHalf"
              x1="0%"
              y1="30%"
              x2="100%"
              y2="30%"
            >
              <stop offset="0%" stopColor="#7EFF7E" />
              <stop offset="65%" stopColor="#FFBC70" />
              <stop offset="100%" stopColor="#FF6969" />
            </linearGradient>
          </defs>

          {/* Background half-circle */}
          <circle
            className="stroke-muted"
            style={{ boxShadow: "0px 0px 4px 0px #00000014 inset" }}
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset="-50"
            strokeLinecap="round"
          />

          {/* Foreground half-circle with gradient */}
          <circle
            stroke="url(#progressGradientHalf)"
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transform: "scaleX(-1)", transformOrigin: "center" }}
          />
        </svg>

        {label && size !== "xxs" ? (
          <div className={halfCircleTextPosition}>
            <div className={cn(valueClass, color)}>
              {valueFormatter
                ? valueFormatter(value, percentage)
                : `${percentage}`}
            </div>
            <div className={cn("font-urbanist font-semibold", labelClass)}>
              {label}
            </div>
          </div>
        ) : (
          <span className={cn(halfCircleTextPosition, valueClass, color)}>
            {valueFormatter
              ? valueFormatter(value, percentage)
              : `${percentage}%`}
          </span>
        )}
      </div>

      {label && size === "xxs" && <div className={labelClass}>{label}</div>}
    </div>
  )
}
