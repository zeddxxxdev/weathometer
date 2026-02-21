"use client"

import { useState, useEffect } from "react"

interface ScoreMeterProps {
  currentScore?: number
  targetScore?: number
  percentileBetter?: number
}

export default function WealthUpScoreMeter({
  currentScore = 43,
  targetScore = 70,
  percentileBetter = 46,
}: ScoreMeterProps) {
  const [animatedScore, setAnimatedScore] = useState(0)

  useEffect(() => {
    let animationFrame: number
    let currentValue = 0
    const targetValue = currentScore
    const duration = 1500 // ms
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth acceleration
      const easeOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress

      currentValue = targetValue * easeOutQuad
      setAnimatedScore(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [currentScore])

  const maxScore = 100
  const percentage = (animatedScore / maxScore) * 100
  const pointsNeeded = Math.max(0, targetScore - currentScore)

  // SVG semicircle arc length (π * radius, where radius = 60)
  const circumference = Math.PI * 60

  return (
    <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-[58%] justify-center">
      <div className="relative h-50 w-120 scale-110">
        <svg
          className="h-full w-full"
          viewBox="0 0 160 85"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background semicircle */}
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* Progress semicircle */}
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="#ff6b5b"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference / 2}
            strokeDashoffset={
              circumference / 2 - (percentage / 100) * (circumference / 2)
            }
            style={{
              transition: "stroke-dashoffset 0.3s ease-out",
            }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
          <div className="text-5xl font-bold tracking-tight text-slate-900">
            {Math.round(animatedScore)}
          </div>
          <div className="mt-1 text-xs font-medium text-slate-500">
            Current Score
          </div>
        </div>
      </div>
    </div>
  )
}
