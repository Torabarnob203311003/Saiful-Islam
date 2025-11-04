import ab1 from "../../assets/ab-1.png";

export default function ContactHero() {
  return (
    <div className="py-6 px-32">

    
    <div className="rounded-2xl overflow-hidden relative ">
      <img
        src={ab1}
        alt="Marketplace"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Empowering your marketplace</h1>
        <p className="max-w-2xl text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Vulputate orci elementum mauris pellentesque semper non imperdiet in...
        </p>
      </div>
    </div>
    </div>
  )
}
