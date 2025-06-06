import { cn } from "@/lib/utils";

export default function ButtonGroup({ handleSetId }: { handleSetId: (id: (prevId: number) => number) => void }) {
  const handlePrevious = () => handleSetId((id) => id > 1 ? id - 1 : id)
  const handleNext = () => handleSetId((id) => id + 1)

  // Common button styles
  const buttonClasses = "w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button 
        name="previous" 
        onClick={handlePrevious}
        className={cn(
          buttonClasses,
          "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
          "hover:from-blue-600 hover:to-purple-600 hover:-translate-y-1 hover:shadow-lg"
        )}
        aria-label="Previous Pokemon"
      >
        ←
      </button>
      <button 
        name="next" 
        onClick={handleNext}
        className={cn(
          buttonClasses,
          "bg-gradient-to-r from-red-500 to-orange-500 text-white",
          "hover:from-red-600 hover:to-orange-600 hover:-translate-y-1 hover:shadow-lg"
        )}
        aria-label="Next Pokemon"
      >
        →
      </button>
    </div>
  )
}
