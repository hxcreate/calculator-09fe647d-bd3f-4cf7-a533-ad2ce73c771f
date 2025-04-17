import { Button } from "@/components/ui/button"
import { useNavigate, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError() as Error
  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-primary">Oops! Something went wrong</h1>
        <p className="text-xl text-muted-foreground">
          {error?.message || "An unexpected error occurred"}
        </p>
        <Button 
          size="lg"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  )
} 