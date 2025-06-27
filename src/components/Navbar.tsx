
import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-xl text-[#141413]">Captcha Ads</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Features</a>
          <a href="#pricing" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Pricing</a>
          <a href="#integration" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Integration</a>
          <a href="#faq" className="text-[#141413] hover:text-[#141413]/80 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[#141413] font-medium hover:text-[#141413]/80 transition-colors">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
