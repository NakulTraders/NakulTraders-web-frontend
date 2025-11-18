
function Footer () {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">YourLogo</h2>
          <p className="text-sm">
            Delivering quality and fresh content every day.  
            Your tagline goes here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Catrgory</a></li>
            <li><a href="#" className="hover:text-white">All product</a></li>
            <li><a href="#" className="hover:text-white">Final List</a></li>
          </ul>
        </div>

        {/* Important */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Important</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@example.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>

      </div>

      <hr className="border-gray-700 my-6" />

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
