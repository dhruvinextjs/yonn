'use client'

import Image from 'next/image'
import { FaApple } from 'react-icons/fa'
import { IoLogoAndroid } from "react-icons/io"

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-black">
            {/* Background */}
            <Image
                src="/images/bg-1.png"
                alt="Background"
                fill
                priority
                className="object-cover "
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="text-[#FFFFFF]">
                        <h1 className="text-4xl font-normal leading-tight md:text-3xl">
                            BETTER DIRECTIONS. EASIER NAVIGATION
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg text-[#FFFFFF] leading-loose tracking-[1px]">
                            Are you tired of wasting time explaining your location? Download
                            Yonn.
                        </p>

                        <p className="mt-4 max-w-xl text-lg text-[#FFFFFF] leading-relaxed	tracking-[1px]">
                            Let&apos;s face it – our cities are hard to navigate and not using
                            street addresses makes it even harder. With Yonn, generate a
                            location code wherever you are and share it securely. What&apos;s
                            more? You can add pictures and voice notes to make sure no-one
                            gets lost… this time!
                        </p>

                        {/* Buttons */}
                        <div className="mt-18 flex flex-wrap gap-4">
                            {/* Apple Store */}
                            <button className="flex items-center gap-3 rounded-lg bg-white  px-12 py-5 text-base font-semibold text-[#660066] transition hover:scale-105 hover:bg-gray-100">
                                <FaApple className="text-2xl text-[#660066]" />
                                Apple Store
                            </button>

                            {/* Play Store */}
                            <button className="flex items-center gap-3 rounded-lg bg-white px-12 py-5 text-base font-semibold text-[#660066] transition hover:scale-105 hover:bg-gray-100">
                                <IoLogoAndroid className="text-2xl text-[#660066]" />
                                Play Store
                            </button>
                        </div>

                    </div>

                    {/* RIGHT PHONES */}
                    <div className="relative flex justify-center lg:justify-end h-[600px] mt-10">
                        {/* Purple Phone - Back Left (mobile1) */}
                        <div className="absolute right-12 top-16 z-20 transform ">
                            <Image
                                src="/images/mobile1.png"
                                alt="Purple App Screen"
                                width={280}
                                height={560}
                                className="drop-shadow-3xl"
                            />
                        </div>

                        {/* Map Phone - Front Right (mobile2) */}
                        <div className="absolute left-12 top-0 z-10 transform  ">
                            <Image
                                src="/images/mobile2.png"
                                alt="Map Screen"
                                width={280}
                                height={560}
                                className="drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
