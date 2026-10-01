import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact";
import { Blog } from "./pages/blog/Blog";
import { HygieneLanding } from "./pages/hygiene";
import { HygieneShop, HygieneShopPage } from "./pages/hygine-shop";
import { Courses, School } from "./pages/school";
import RegistrationForm from "./pages/school/components/RegistrationForm";
import ScrollToTop from "./components/ScrollToTop";
import HygieneShopCheckout from "./pages/hygine-shop/checkout";
import PrivacyPolicy from "./components/PolicyPrivacy";
import Top10CleaningCompaniesLagos from "./pages/Top10CleaningCompaniesLagos";

function Layout() {
  const location = useLocation();

  // pages where Navbar should NOT appear
  const hideNavbarRoutes = [
    "/top-10-cleaning-companies-in-lagos",
  ];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/top-10-cleaning-companies-in-lagos"
          element={<Top10CleaningCompaniesLagos />}
        />
        <Route path="about" element={<About />} />
        <Route path="career" element={<Career />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="register-form" element={<RegistrationForm />} />

        {/* hygiene */}
        <Route path="hygiene" element={<HygieneLanding />} />

        <Route path="hygiene-shop">
          <Route index element={<HygieneShop />} />
          <Route path=":category" element={<HygieneShopPage />} />
          <Route path="checkout" element={<HygieneShopCheckout />} />
          <Route path="checkout/:product" element={<HygieneShopCheckout />} />
        </Route>

        <Route path="school">
          <Route index element={<School />} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="container max-w-[1450px] mx-auto">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
