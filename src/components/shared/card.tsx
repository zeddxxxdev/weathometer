import { cn } from "@/lib/utils"

const Card = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 15px 0px rgba(74, 144, 226, 0.3)",
      }}
      className={cn("h-fit w-full rounded-[20px] bg-card p-6", className)}
      {...props}
    />
  )
}

export default Card
