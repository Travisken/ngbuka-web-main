"use client"

import { Button } from "@/components/ui/button"

const error = ({
    error,
    reset
}) => {
  return (
    <div>error
        <Button onClick={reset}>Try again</Button>
        {error.message}
    </div>
  )
}

export default error