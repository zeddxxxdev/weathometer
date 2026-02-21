import Icons from "@/icons"

interface PageHeaderWelcomeProps {
  username: string
  age: number
  isVerified: boolean
}

const PageHeaderWelcome = ({
  username,
  age,
  isVerified,
}: PageHeaderWelcomeProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="space-y-1">
        <h5 className="text-xl">
          Good Morning, <strong>{username}!</strong>
        </h5>
        <p className="text-lg">
          At <strong>{age}</strong>, your income is strong, but your wealth
          efficiency is lagging.{" "}
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full bg-success-background py-2 pr-5 pl-4 shadow-md shadow-black/5">
        <Icons.Shield className="size-4" />

        <p className="text-sm text-success">Verified Analysis</p>
      </div>
    </div>
  )
}

export default PageHeaderWelcome
