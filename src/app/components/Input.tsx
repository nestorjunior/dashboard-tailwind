import { Search } from "lucide-react";
import { ComponentProps } from 'react';

interface InputIconProps extends ComponentProps<'div'> { }

export function InputIcon(props: InputIconProps) {
  return <div {...props} />
}

interface InputControlProps extends ComponentProps<'input'> { }

export function InputControl(props: InputControlProps) {
  return <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" {...props} />
}

interface InputRootProps extends ComponentProps<'div'> { }
export function InputRoot(props: InputControlProps) {
  return (
    <>
      <div className="flex w-full items-center gap-2 rounded-lg border-zinc-200 px-3 py-2 shadow-sm" {...props} />
    </>
  )
}