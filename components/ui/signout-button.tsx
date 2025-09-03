import { signOut } from "@/auth"
import { Button } from "./button"
import Image from "next/image"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
        <Button className="bg-transaparent gap-4">
            <Image 
                src={'/icons/Outline/Arrows Action/Logout 3.svg'}
                alt='logout'
                width={20}
                height={20}
            />
            <p className="text-light-900 base-medium">Logout</p>
        </Button>
    </form>
  )
}