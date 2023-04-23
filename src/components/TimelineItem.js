export default function TimelineItem({ name, children }) {
  return (
    <div class="flex items-center gap-2 min-h-[50px]">
      <div class="relative flex flex-col justify-center items-center">
        <div class="h-full flex-1 w-[1px] bg-zinc-100"></div>
        <div class="h-4 w-4 drop-shadow-glow flex-none rounded-full bg-zinc-300"></div>
        <div class="h-full flex-1 w-[1px] bg-zinc-100"></div>
      </div>
      <div class="ml-10 py-10 flex flex-col">
        <div>
          <h1 class="font-bold text-zinc-700">{name}</h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
