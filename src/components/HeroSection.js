'use client'
 
import Image from 'next/image'
 
export default function HeroSection() {
  return (
    <section className="relative w-500 h-[1500px] overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="/images/bg-1.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />
 
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              BETTER DIRECTIONS. <br /> EASIER NAVIGATION
            </h1>
 
            <p className="mt-6 max-w-xl text-base text-gray-200">
              Are you tired of wasting time explaining your location? Download
              Yonn.
            </p>
 
            <p className="mt-4 max-w-xl text-base text-gray-200">
              Let&apos;s face it – our cities are hard to navigate and not using
              street addresses makes it even harder. With Yonn, generate a
              location code wherever you are and share it securely. What&apos;s
              more? You can add pictures and voice notes to make sure no-one
              gets lost… this time!
            </p>
 
            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-black transition hover:scale-105">
                <Image
                  src="/apple.svg"
                  alt="Apple"
                  width={22}
                  height={22}
                />
                <span className="font-medium">Apple Store</span>
              </button>
 
              <button className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-black transition hover:scale-105">
                <Image
                  src="/playstore.svg"
                  alt="Play Store"
                  width={22}
                  height={22}
                />
                <span className="font-medium">Play Store</span>
              </button>
            </div>
          </div>
 
          {/* RIGHT PHONES */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Purple Phone */}
            <Image
              src="/phone-purple.png"
              alt="Purple App Screen"
              width={260}
              height={520}
              className="relative z-10"
            />
 
            {/* Map Phone */}
            <Image
              src="/phone-map.png"
              alt="Map Screen"
              width={260}
              height={520}
              className="absolute right-0 top-16 z-20 hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}