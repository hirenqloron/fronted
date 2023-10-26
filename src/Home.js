import "./App.css";

import SideBar from "./componenet/sideBar/SideBar";
import Header from "./componenet/header/Header";
import Footer from "./componenet/footer/Footer";
import Dashboard from "./pages/DashBoard/Dashboard";



function Home() {
  localStorage.setItem('userRole', 'Client' );
  const userRole =  localStorage.getItem('userRole') || 'HR'; 
  console.log('userRole ',userRole);
  return (
    <div className="App">
      <div className="inner-container">
        <div className="side-bar">
          <SideBar userRole={userRole}  />
        </div>
        <div className="main-section">
       
          <div className="header-sec">
            <Header />
         
          </div>

          <Dashboard/>
          <div className="footer-section">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
