"use client"

import { bandhanBank, hdfcBank } from "@/assets/logos"
import Icons from "@/icons"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const defaultPrices = [500, 1000, 5000, 6000] as const
const performers = [
  {
    title: "HDFC Mid-Cap Fund",
    percents: "26.6% (3Y)",
    image: hdfcBank,
  },
  {
    title: "Bandhan Small Cap Fund",
    percents: "32% (3Y)",
    image: bandhanBank,
  },
] as const

const CardCritical = () => {
  const [selectedPrice, setSelectedPrice] = useState<
    (typeof defaultPrices)[number] | number
  >(500)
  const [selectedBank, setSelectedBank] = useState<
    (typeof performers)[number]["title"]
  >("Bandhan Small Cap Fund")

  return (
    <div
      style={{ boxShadow: "0px 0px 12px 0px #294F7C26" }}
      className="w-full space-y-2.5 rounded-2xl border border-foreground bg-white px-4 py-3"
    >
      <p className="font-urbanist text-xs font-semibold text-critical">
        Step 1: Critcal
      </p>

      <div className="space-y-1">
        <h6 className="text-lg font-semibold text-secondary">
          Build your safety net (Emergency fund)
        </h6>
        <p className="text-xs text-secondary">
          Ankit, avoid a potential 2-year setback. Build your emergency fund to
          be risk-free within the next 6 months.
        </p>
      </div>

      <div className="space-y-2.5 pt-3">
        <p className="font-urbanist text-sm font-semibold">
          I can commit to saving{" "}
          <span className="rounded-md bg-[#D2E3F780] px-2 py-1">
            ₹{selectedPrice}
          </span>{" "}
          monthly
        </p>

        <div className="flex w-full items-center gap-1.5 font-urbanist">
          {defaultPrices.map((price) => {
            const active = price === selectedPrice

            return (
              <button
                key={price}
                onClick={() => setSelectedPrice(price)}
                className={cn(
                  "rounded border border-[#D9D9D9] px-2.5 py-0.5 text-xs font-semibold",
                  active && "border-foreground bg-[#E6F2FF]"
                )}
              >
                ₹{price}
              </button>
            )
          })}

          <label htmlFor="relative">
            <p className="absolute mt-0.5 text-sm">₹</p>
            <input
              type="tel"
              placeholder="Enter amount"
              onChange={(e) => setSelectedPrice(Number(e.target.value))}
              className="w-full grow border-b border-foreground pb-1 pl-3 text-sm font-medium outline-none placeholder:font-normal placeholder:text-[#818181] focus:outline-none"
            />
          </label>
        </div>
      </div>

      <div className="space-y-2 pt-3 font-urbanist text-sm font-semibold">
        <p>Recommended Funds (Top performers)</p>

        <div className="relative grid w-full grid-cols-2 gap-2">
          {performers.map(({ title, percents, image }) => {
            const selected = title === selectedBank

            return (
              <button
                key={title}
                onClick={() => setSelectedBank(title)}
                className={cn(
                  "flex items-center gap-1.5 rounded-md border border-[#d9d9d9] py-2 pr-4 pl-1.5 font-urbanist",
                  selected && "border-foreground bg-[#E6F2FF]"
                )}
              >
                <Image
                  src={image}
                  alt={title + ` Logo`}
                  height={40}
                  width={40}
                  className="shrink-0 object-contain"
                />
                <div className="space-y-0.5">
                  <p className="line-clamp-1 text-xs font-semibold">{title}</p>
                  <p className="text-[10px] font-medium text-[#00BA00]">
                    {percents}
                  </p>
                </div>
              </button>
            )
          })}

          <button
            style={{ boxShadow: "0px 0px 15px 0px #4A90E280" }}
            className="absolute top-1/2 right-0 z-10 grid size-6 translate-x-3 -translate-y-1/2 place-items-center rounded-full bg-[#F8FAFC33] backdrop-blur-sm"
          >
            <Icons.ChevronRight className="size-3" />
          </button>
        </div>
      </div>

      <div className="space-y-2.5 pt-3">
        <button className="h-12 w-full rounded-full bg-linear-to-r from-foreground to-[#4B90E2] text-base font-semibold text-white">
          Start Investing Today{" "}
          <span className="rounded-full border border-[#00BA00] bg-card py-1 pr-2.5 pl-2 font-urbanist text-sm text-[#00BA00]">
            +20 pts
          </span>
        </button>

        <p className="text-center text-sm">
          <Icons.Thunder className="mb-1 inline-block size-3.5" />{" "}
          <strong>Express setup:</strong> Complete in under 3 minutes
        </p>
      </div>
    </div>
  )
}

interface CardNextStepsProps {
  step: number
  title: string
  description: string
  buttonLabel: string
  points: number
}

const CardNextSteps = ({
  step,
  title,
  description,
  buttonLabel,
  points,
}: CardNextStepsProps) => {
  return (
    <div className="flex w-full flex-col justify-between space-y-2.5 rounded-2xl border border-[#dddddd] bg-card-foreground px-4.5 py-3">
      <div className="space-y-2.5">
        <p className="font-urbanist text-xs font-semibold text-[#696969]">
          Step {step}
        </p>

        <div className="space-y-1">
          <h6 className="text-lg font-semibold text-secondary">{title}</h6>
          <p className="text-xs text-secondary">{description}</p>
        </div>
      </div>

      <div className="space-y-2.5 pt-3">
        <button
          disabled
          className="h-12 w-full rounded-full bg-linear-to-r from-foreground to-[#4B90E2] text-base font-semibold text-white disabled:opacity-50"
        >
          {buttonLabel}{" "}
          <span className="rounded-full border border-[#00BA00] bg-card py-1 pr-2.5 pl-2 font-urbanist text-sm text-[#00BA00]">
            +{points} pts
          </span>
        </button>

        <p className="text-center text-sm text-[#4C4C4C]">
          <Icons.Lock className="mb-1 inline-block size-3.5" /> Complete step 1
          (critical) to unlock
        </p>
      </div>
    </div>
  )
}

export { CardCritical, CardNextSteps }
