import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-orange-50 border-t border-amber-200/50">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Fibo
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed max-w-md">
              Mastering creativity, delivering results. We're building the future of AI-powered design 
              tools with mathematical precision and creative freedom.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Mail className="h-5 w-5 mr-3 text-amber-600" />
                <a href="mailto:hello@fibo.ai" className="hover:text-amber-600 transition-colors">
                  hello@fibo.ai
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="h-5 w-5 mr-3 text-amber-600" />
                <a href="mailto:business@fibo.ai" className="hover:text-amber-600 transition-colors">
                  business@fibo.ai
                </a>
              </div>
              <div className="flex items-start text-gray-700">
                <MapPin className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-medium">Legal Address:</p>
                  <p className="text-sm">[PLACEHOLDER - Legal address in Armenia]</p>
                  <p className="text-sm text-amber-700 mt-1">Proudly operating from Yerevan, Armenia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">AI Design Assistant</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Smart Color Harmony</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Layout Intelligence</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Brand DNA AI</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Design Critique Bot</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Beta Program</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-amber-200/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Fibo. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
