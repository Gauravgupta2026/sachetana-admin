

export function LogoSection() {
  return (
    <section className=" align-center w-full mt-72 md:py-8 lg:py-10">
      <div className=" px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-center">
              Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

