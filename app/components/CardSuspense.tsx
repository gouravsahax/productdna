export default function CardSuspense() {
    return (
        <div className="flex flex-col w-[280px] rounded-sm border border-white/10 bg-neutral-950 overflow-hidden animate-pulse">
            <div className="w-full aspect-square bg-neutral-800" />

            <div className="flex flex-col gap-2 p-4 border-t border-white/10">
                <div className="h-3.5 w-full bg-neutral-800 rounded-sm" />
                <div className="h-3.5 w-2/3 bg-neutral-800 rounded-sm" />
                <div className="h-3 w-1/2 bg-neutral-800 rounded-sm mt-1" />
            </div>
        </div>
    );
}