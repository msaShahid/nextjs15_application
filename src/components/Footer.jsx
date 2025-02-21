const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MD28. All rights reserved.</p>
          <div className="mt-4">
            <a href="/privacy-policy" className="mx-4 text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="mx-4 text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  