import Link from "next/link";

const HeroSection = () => {
    return (
        <div>
            <div className="text-8xl font-bold flex items-center justify-center h-[70vh] custom-bg text-white">
                <p className="bg-gray-900/90 p-4 rounded-sm">
                    HAVE A TASTE OF MY MEAT
                </p>
            </div>
            <div>
                <Link className="bg-white flex text-center justify-center font-bold hover:text-blue-900 p-4 rounded-sm" href="/collection" >
                        CHECKOUT OUR COLLECTION  
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
