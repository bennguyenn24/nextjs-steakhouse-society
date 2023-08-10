"use client";
import Link from "next/link";
import Image from "next/image";

const page = () => {
    return (
        <div className="flex flex-col items-center p-5">
            <p className="text-4xl p-8">
                Take a look at our extensive collection
            </p>

            <div className="flex flex-col md:flex-row justify-center p-5">
                <Link
                    className="bg-white p-8 rounded-lg shadow-2xl max-w-sm mx-4 my-4 md:mx-10 md:my-8 hover:shadow-lg transition duration-300 transform hover:scale-105"
                    href="/steaks"
                >
                    <div className="w-40 h-40 bg-gray-200 mb-4 rounded-md">
                        <Image
                            src="/steak.jpg"
                            width={500}
                            height={500}
                           
                            alt=""
                            style={{ maxWidth: "100%", height: "100%" }}
                        />
                    </div>
                    <h2 className="text-xl font-semibold mt-16">Steaks</h2>
                </Link>
                <Link
                    className="bg-white p-8 rounded-lg shadow-2xl max-w-sm mx-4 my-4 md:mx-10 md:my-8 hover:shadow-lg transition duration-300 transform hover:scale-105"
                    href="/pork"
                >
                    <div className="w-40 h-40 bg-gray-200 mb-4 rounded-md">
                        <Image
                            src="/porks.jpg"
                            width={500}
                            height={500}
                            
                            alt=""
                            style={{ maxWidth: "100%", height: "100%" }}
                        />
                    </div>
                    <h2 className="text-xl font-semibold mt-16">Pork</h2>
                </Link>
                <Link
                    className="bg-white p-8 rounded-lg shadow-2xl max-w-sm mx-4 my-4 md:mx-10 md:my-8 hover:shadow-lg transition duration-300 transform hover:scale-105"
                    href="/seafood"
                >
                    <div className="w-40 h-40 bg-gray-200 mb-4 rounded-md">
                        <Image
                            src="/seafood.jpg"
                            width={500}
                            height={500}
                           
                            alt=""
                            style={{ maxWidth: "100%", height: "100%" }}
                        />
                    </div>
                    <h2 className="text-xl font-semibold mt-16">Seafood</h2>
                </Link>
            </div>
        </div>
    );
};

export default page;
