import { useNavigate } from "react-router-dom";

function Footer () {

  const navigator = useNavigate()
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Nakul Traders</h2>
          <p className="text-sm">
            403, Jawahar Marg Indore M.P. <br></br>
            FSSAI No. : 11414850002116 <br></br>
            GSTIN\UIN : 23ABRPB5017C1Z8
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm hover:cursor-pointer">
            <li onClick={()=> navigator('/')} className="hover:text-white">Catrgory</li>
            <li onClick={()=> navigator('/products')} className="hover:text-white">All product</li>
            <li onClick={()=> navigator('/list')} className="hover:text-white">Final List</li>
            <li onClick={()=> navigator('/admin')} className="hover:text-white">Admin panel</li>
          </ul>
        </div>

        {/* Important */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Important</h3>
          <ul className="space-y-2 text-sm  hover:cursor-pointer">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@example.com</p>
          <p className="text-sm">Phone: 0731-4959500 , 9827791999</p>
          <div className="flex gap-4 mt-3  hover:cursor-pointer">
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
