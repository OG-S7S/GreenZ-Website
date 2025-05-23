import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="h-8 w-8 text-emerald-600 animate-spin" />
      <span className="ml-2 text-emerald-600">Loading assessment...</span>
    </div>
  )
}
