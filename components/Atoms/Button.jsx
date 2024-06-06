import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const ButtonVariants = cva(
    "px-12 py-4 rounded-3xl font-semibold",
   {
    variants: {
      variant : {
        primary: 'bg-[#D47604] text-secondary-25',
        secondary: 'border border-[#FF8E05] text-[#FF8E05]',

      }
     },
     defaultVariants: {
      variant: 'primary',
     }
   }
)

const Button = ({ className, variant, onClick, isDisabled = false , ...props }) => {
  // Use ButtonVariants function to get the class names for the specified variant
const buttonClassNames = ButtonVariants({variant});

  return <button onClick={onClick} disabled={isDisabled} className={cn(buttonClassNames, className)} {...props} />;
}

export {Button, ButtonVariants}