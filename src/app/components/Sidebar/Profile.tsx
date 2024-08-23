import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <>
      <div className="flex items-center gap-3">
        <img src="https://github.com/nestorjunior.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="truncate flex flex-col">
          <span className="truncate text-sm font-semibold text-zinc-700">Nestor Júnior</span>
          <span className="truncate text-sm text-zinc-500">contacadfasdfasdfasdfasdfasdft@email.com</span>
        </div>
        <button type="button" className="ml-auto">
          <LogOut className="w-5 h5 text-zinc-500" />
        </button>
      </div>
    </>
  )
}