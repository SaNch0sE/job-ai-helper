import { signIn } from "@/auth"
import { Button, NextUIProvider } from "@nextui-org/react"

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  )
}