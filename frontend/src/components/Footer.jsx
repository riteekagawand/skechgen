import React from 'react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Generate', href: '#generate' },
    { name: 'About', href: '#about' },
    { name: 'Help', href: '#help' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-blue-400 font-semibold text-lg mb-4">About SketchGen</h4>
            <p className="text-gray-400 leading-relaxed">
              Developed in collaboration with forensic experts and law enforcement agencies to provide reliable, ethical AI-powered suspect identification tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-blue-400 font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-blue-400 font-semibold text-lg mb-4">Development Team</h4>
            <p className="text-gray-400 leading-relaxed">
              Project Guide: [Guide Name]
            </p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Team Members:<br />
              [Member 1]<br />
              [Member 2]<br />
              [Member 3]<br />
              [Member 4]
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-blue-400 font-semibold text-lg mb-4">Contact</h4>
            <p className="text-gray-400 leading-relaxed">
              Email: support@sketchgen.law<br />
              Phone: [Contact Number]<br />
              Emergency Line: Available 24/7
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 SketchGen. All rights reserved. | Privacy Policy | Terms of Service | Law Enforcement Use Only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
