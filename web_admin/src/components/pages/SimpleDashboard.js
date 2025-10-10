import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const SimpleDashboard = () => {
  return (
    <div className="container-scroller">
      <Header />

      <div className="container-fluid page-body-wrapper">
        <Sidebar />

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="mb-4">Cosmetic Brand Dashboard</h2>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card card-rounded">
                      <div className="card-body">
                        <h5 className="card-title">Total Sales</h5>
                        <h3>₹45,000</h3>
                        <p>Monthly sales for cosmetic products</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-rounded">
                      <div className="card-body">
                        <h5 className="card-title">Inventory</h5>
                        <h3>1,200</h3>
                        <p>Available cosmetic products in stock</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-rounded">
                      <div className="card-body">
                        <h5 className="card-title">New Customers</h5>
                        <h3>350</h3>
                        <p>New customers this month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="card card-rounded">
                      <div className="card-body">
                        <h5 className="card-title">Top Selling Products</h5>
                        <ul>
                          <li>Lipstick - 500 units</li>
                          <li>Foundation - 300 units</li>
                          <li>Mascara - 200 units</li>
                          <li>Blush - 150 units</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SimpleDashboard;
