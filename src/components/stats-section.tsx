export default function StatsSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-[#00584D] sm:text-4xl md:text-5xl">
                Creating impact
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#7CDBC1] p-6 h-40">
                <div className="text-4xl font-bold text-white">30%</div>
                <div className="text-white mt-2">Anxiety</div>
              </div>
              <div className="bg-[#F5EFE6] p-6 h-40">
                <div className="text-4xl font-bold text-[#00584D]">40%</div>
                <div className="text-[#00584D] mt-2">Stress</div>
              </div>
              <div className="bg-[#00584D] p-6 h-40 col-span-2">
                <div className="text-4xl font-bold text-white">30%</div>
                <div className="text-white mt-2">Energy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  