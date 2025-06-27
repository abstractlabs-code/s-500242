
import { Button } from "@/components/ui/button";
import { Shield, Eye, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background pattern with improved styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#EFF3FF]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #E2E8F3 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5
        }}></div>
      </div>

      {/* Animated floating circles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white border-2 border-gray-200 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-white border-2 border-gray-200 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-white border-2 border-gray-200 animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Larger decorative elements */}
      <div className="absolute top-1/2 left-[15%] w-24 h-24 rounded-full bg-highlight/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-[20%] w-32 h-32 rounded-full bg-[#A3D8FF]/20 blur-3xl"></div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Badge above heading */}
          <div className="mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <span className="text-sm font-medium text-primary/80">Revolutionary Ad-Based Security</span>
          </div>
          
          <h1 className="text-[86px] leading-[1] font-bold tracking-[-0.03em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#1EAEDB]">
            Turn Security<br />Into Revenue
          </h1>
          
          <div className="max-w-[660px] mx-auto mb-12">
            <p className="text-xl text-primary/70 leading-relaxed">
              Replace traditional CAPTCHAs with engaging advertisements.
              <br />
              Protect your site while generating revenue from every verification.
            </p>
          </div>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Bot Protection</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Revenue Generation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Eye className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Better UX</span>
            </div>
          </div>

          <div className="flex gap-4 mb-16">
            <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-primary font-medium px-6 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
              <Shield className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            
            <Button variant="outline" size="lg" className="border-gray-300 font-medium px-6 py-6 rounded-lg text-lg hover:bg-gray-100/50 transition-all">
              See Live Demo
            </Button>
          </div>

          <div className="max-w-[900px] mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F2FF44]/30 to-[#A3D8FF]/30 rounded-xl blur-md"></div>
            <div className="relative rounded-xl border-4 border-white/80 shadow-2xl overflow-hidden bg-white">
              <div className="p-8">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Captcha Ads in Action</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded border-2 border-dashed border-gray-300 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Interactive Ad Captcha</p>
                      <p className="text-xs text-gray-400">Secure + Profitable</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>✓ Bot Protection</span>
                  <span>✓ Revenue Stream</span>
                  <span>✓ User Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
