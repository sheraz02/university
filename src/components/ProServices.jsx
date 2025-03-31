import { HiCheckBadge } from "react-icons/hi2";

const ProServices = () => {
    return (
      <div className="w-full max-w-screen-xl mx-auto p-6">
        <div className="bg-green-100 flex justify-center items-center py-16 px-6">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-4xl font-semibold text-gray-900">
                See how our <span className="text-green-600">scholarship</span> program helps minor families
              </h2>
              <div className="mt-6 flex space-y-5">
                <div className="flex items-start gap-3">
                  <HiCheckBadge className="text-green-600 text-4xl" />
                  <div>
                    <h3 className="text-lg font-semibold">Satisfaction guarantee</h3>
                    <p className="text-gray-600 text-sm">Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckBadge className="text-green-600 text-4xl" />
                  <div>
                    <h3 className="text-lg font-semibold">Flexible payment models</h3>
                    <p className="text-gray-600 text-sm">Pay per project or opt for hourly rates to facilitate longer-term collaboration.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-y-5">
                <div className="flex items-start gap-3">
                  <HiCheckBadge className="text-green-600 text-4xl" />
                  <div>
                    <h3 className="text-lg font-semibold">Satisfaction guarantee</h3>
                    <p className="text-gray-600 text-sm">Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiCheckBadge className="text-green-600 text-4xl" />
                  <div>
                    <h3 className="text-lg font-semibold">Flexible payment models</h3>
                    <p className="text-gray-600 text-sm">Pay per project or opt for hourly rates to facilitate longer-term collaboration.</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 px-6 py-3 bg-black text-white cursor-pointer rounded-md text-sm font-semibold hover:bg-gray-800">
                Explore
              </button>
            </div>
            
            {/* Right Side - Image and Overlay Elements */}
            <div className="relative">
              <img 
                src="https://usp.edu.pk/wp-content/uploads/2024/06/Cover-Markaz-Portal.jpg" 
                alt="Fiverr Pro" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProServices;