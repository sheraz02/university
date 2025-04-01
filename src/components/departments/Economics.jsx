import { HiCheckBadge } from "react-icons/hi2";

const Economics = () => {
    return (
      <div className="w-full mx-auto p-6">
        <div className="bg-green-100 flex justify-center items-center py-16 px-6">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-4xl font-semibold text-gray-900">
                See how vibrant our <span className="text-green-600">Economics</span> is
              </h2>
              
              <div className="mt-6 flex space-y-5">
              
                <div className="flex items-start gap-3">
                <HiCheckBadge className="text-green-600 text-9xl" />
                  <div>
                    
                    <h3 className="text-lg font-semibold">Satisfaction guarantee</h3>
                    
                    <p className="text-gray-600 text-2xl">This Department is a blessing for the students of Southern Punjab as it has so far produced hundreds of economists and researchers since its inception in 2010. This Department provides education from BS level to M.Phil. level, and the new students can enjoy a conducive and friendly learning environment. Our students have not only served in different renowned educational institutions, commercial banks, the State Bank of Pakistan, and business organizations at managerial positions. They are doing their Ph.D.’s in Pakistan as well as in foreign universities on a merit scholarship. I invite new students to join the Best University in Multan at all levels with full confidence and optimism about their success through the rigorous learning process.</p>
                  </div>
                </div>
                </div>
                {/* <div className="flex items-start gap-3">
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
              </div> */}
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

export default Economics;

