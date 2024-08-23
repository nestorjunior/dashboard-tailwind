export function UsedSpaceWidget() {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-lg bg-violet-500 px-4 py-5">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-5 text-violet-700">Used Space</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nesciunt? Incidunt magnam omnis aut delectus!</p>
        </div>
      </div>
      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
      </div>
      <div className="space-x-3">
        <button className="text-sm font-medium text-violet-500 hover:text-violet-600" type="button">
          Dismiss
        </button>
        <button className="text-sm font-medium text-violet-700 hover:text-violet-900" type="button">
          Upgrade
        </button>
      </div>
    </>
  )
}