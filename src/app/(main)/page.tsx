import { wealthupLogo } from "@/assets/logos"
import Image from "next/image"
import Link from "next/link"
import PageHeaderWelcome from "./_components/page-header"
import Card from "@/components/shared/card"
import { ProgressBarHalfCircle } from "@/components/ui/progress-indicator"
import { cn } from "@/lib/utils"
import { ProgressBarBase } from "@/components/ui/progress-bar"
import {
  CardCritical,
  CardNextSteps,
} from "@/components/wealthup/cards/card-critical"

const score: Record<string, { current: number; maximum: number }> = {
  emergency_funds: {
    current: 0,
    maximum: 20,
  },
  liquidity: {
    current: 11,
    maximum: 20,
  },
  investments: {
    current: 20,
    maximum: 20,
  },
  health_insurance: {
    current: 20,
    maximum: 20,
  },
  life_insurance: {
    current: 7,
    maximum: 20,
  },
  savings: {
    current: 16,
    maximum: 20,
  },
}

export default function Page() {
  return (
    <div className="w-full pb-8">
      <div className="mb-3 flex items-center justify-center py-4">
        <Link href="/">
          <Image
            src={wealthupLogo}
            alt="Wealthup Brand Logo"
            draggable={false}
            height={40}
            width={120}
          />
        </Link>
      </div>

      <div className="w-full space-y-6">
        <PageHeaderWelcome username="Ankit" age={28} isVerified />

        <Card className="relative grid grid-cols-1 gap-8 overflow-hidden xl:grid-cols-3">
          <div className="absolute top-1/2 left-0 aspect-square h-[200%] -translate-1/2 rounded-full bg-[#FF6A6A]/5 blur-3xl" />
          <div className="z-20 col-span-full shrink-0 self-end xl:col-span-1">
            <div className="space-y-3.5 self-end pb-4">
              <div
                style={{
                  boxShadow: "0px 0px 28px 0px #D1E6FF99",
                }}
                className="relative mx-auto grid h-50 w-86 place-items-center rounded-t-[300px] rounded-b-xl bg-white xl:h-54 xl:w-[93%]"
              >
                <ProgressBarHalfCircle
                  size="lg"
                  label="Current WealthUp Score"
                  min={0}
                  max={100}
                  value={24}
                />
              </div>
              <p className="text-center font-urbanist font-light italic">
                Better than <strong className="font-bold">46%</strong> of peers
              </p>
            </div>
          </div>

          <div className="col-span-2 w-full space-y-6 pl-8">
            <div className="space-y-4">
              <h6 className="font-urbanist text-xl">
                Financial independence age
              </h6>
              <div className="grid w-fit grid-cols-2 font-urbanist">
                <div
                  style={{ boxShadow: "0px 0px 24px 0px #4A90E240" }}
                  className="space-y-1 rounded-l-lg border border-white bg-[#F9F9F9] px-7 py-3 text-center text-muted-foreground"
                >
                  <p className="font-semibold">Current Trajectory</p>
                  <p className="text-3xl font-bold">65</p>
                  <p className="leading-tight">
                    Based on current savings <br /> you have
                  </p>
                </div>
                <div
                  style={{ boxShadow: "0px 0px 24px 0px #4A90E240" }}
                  className="space-y-1 rounded-r-lg border border-white bg-[#EAF4FB] px-7 py-3 text-center text-foreground"
                >
                  <p className="font-semibold">Your Potential</p>
                  <p className="text-3xl font-bold">38</p>
                  <p className="leading-tight">
                    By following our <br /> personalized roadmap
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h6 className="font-urbanist text-xl">Your score breakdown</h6>

              <div className="grid grid-cols-3 gap-y-4 font-urbanist">
                {Object.entries(score).map(
                  ([key, { current, maximum }], idx) => (
                    <div
                      key={key}
                      className={cn("space-y-2 px-1.5 pr-4", {
                        "border-x border-[#D4D4D4] pl-4": [1, 4].includes(idx),
                        "pr-1.5 pl-4": [2, 5].includes(idx),
                      })}
                    >
                      <div
                        key={key}
                        className="flex items-center justify-between"
                      >
                        <p className="text-base font-bold capitalize">
                          {key.replace(/_/g, " ")}
                        </p>
                        <p className="text-sm font-light text-muted-foreground">
                          {current} / {maximum}
                        </p>
                      </div>

                      <ProgressBarBase value={current} max={maximum} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-full space-y-5">
          <h2 className="font-urbanist text-xl">
            Your personalized roadmap to <strong>70+ WealthUp</strong> score
          </h2>

          <div className="grid w-full grid-cols-2 gap-4 xl:grid-cols-3">
            <CardCritical />

            <CardNextSteps
              step={1}
              title="Optimize investments"
              description="Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies tailored to your risk profile."
              buttonLabel="Begin Investing"
              points={12}
            />

            <CardNextSteps
              step={2}
              title="Maximize growth"
              description="Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles."
              buttonLabel="Analyse your Mutual Funds"
              points={8}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
