"use client"

import type { ReactNode } from "react"
import type {
  ButtonProps as AriaButtonProps,
  TooltipProps as AriaTooltipProps,
  TooltipTriggerComponentProps as AriaTooltipTriggerComponentProps,
} from "react-aria-components"
import {
  Button as AriaButton,
  OverlayArrow as AriaOverlayArrow,
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
} from "react-aria-components"
import { cn } from "@/lib/utils"

interface TooltipProps
  extends AriaTooltipTriggerComponentProps, Omit<AriaTooltipProps, "children"> {
  title: ReactNode
  description?: ReactNode
  arrow?: boolean
  delay?: number
}

export const Tooltip = ({
  title,
  description,
  children,
  arrow = false,
  delay = 300,
  closeDelay = 0,
  trigger,
  isDisabled,
  isOpen,
  defaultOpen,
  offset = 6,
  crossOffset,
  placement = "top",
  onOpenChange,
  ...tooltipProps
}: TooltipProps) => {
  const isTopOrBottomLeft = [
    "top left",
    "top end",
    "bottom left",
    "bottom end",
  ].includes(placement)
  const isTopOrBottomRight = [
    "top right",
    "top start",
    "bottom right",
    "bottom start",
  ].includes(placement)
  const calculatedCrossOffset = isTopOrBottomLeft
    ? -12
    : isTopOrBottomRight
      ? 12
      : 0

  return (
    <AriaTooltipTrigger
      {...{
        trigger,
        delay,
        closeDelay,
        isDisabled,
        isOpen,
        defaultOpen,
        onOpenChange,
      }}
    >
      {children}

      <AriaTooltip
        {...tooltipProps}
        offset={offset}
        placement={placement}
        crossOffset={crossOffset ?? calculatedCrossOffset}
        className={({ isEntering, isExiting }) =>
          cn(
            isEntering && "animate-in ease-out",
            isExiting && "animate-out ease-in"
          )
        }
      >
        {({ isEntering, isExiting }) => (
          <div
            className={cn(
              "z-50 flex max-w-xs origin-(--trigger-anchor-point) flex-col items-start gap-1 rounded-lg bg-white px-3 text-foreground shadow-lg will-change-transform",
              description ? "py-3" : "py-2",
              isEntering &&
                "in-placement-left:slide-in-from-right-0.5 in-placement-right:slide-in-from-left-0.5 in-placement-top:slide-in-from-bottom-0.5 in-placement-bottom:slide-in-from-top-0.5 animate-in ease-out zoom-in-95 fade-in",
              isExiting &&
                "in-placement-left:slide-out-to-right-0.5 in-placement-right:slide-out-to-left-0.5 in-placement-top:slide-out-to-bottom-0.5 in-placement-bottom:slide-out-to-top-0.5 animate-out ease-in zoom-out-95 fade-out"
            )}
          >
            <span className="text-sm text-foreground">{title}</span>

            {description && (
              <span className="text-tooltip-supporting-text text-xs font-medium">
                {description}
              </span>
            )}

            {arrow && (
              <AriaOverlayArrow>
                <svg
                  viewBox="0 0 100 100"
                  className="in-placement-left:-rotate-90 in-placement-right:rotate-90 in-placement-top:rotate-0 in-placement-bottom:rotate-180 size-2.5 fill-white"
                >
                  <path d="M0,0 L35.858,35.858 Q50,50 64.142,35.858 L100,0 Z" />
                </svg>
              </AriaOverlayArrow>
            )}
          </div>
        )}
      </AriaTooltip>
    </AriaTooltipTrigger>
  )
}

interface TooltipTriggerProps extends AriaButtonProps {}

export const TooltipTrigger = ({
  children,
  className,
  ...buttonProps
}: TooltipTriggerProps) => {
  return (
    <AriaButton
      {...buttonProps}
      className={(values) =>
        cn(
          "h-max w-max outline-hidden",
          typeof className === "function" ? className(values) : className
        )
      }
    >
      {children}
    </AriaButton>
  )
}
