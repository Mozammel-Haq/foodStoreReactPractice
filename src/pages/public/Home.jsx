const Home = () => {
  return (
    <>
<main>
  {/* Hero Section */}
  <section className="hero-section d-flex align-items-center text-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="hero-title">Delicious Food, Delivered To You</h1>
          <p className="lead mb-4">
            Experience the best local flavors with our curated selection of
            fresh meals. Order now and satisfy your cravings.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="foods.html" className="btn btn-primary btn-lg">Order Now</a>
            <a href="about.html" className="btn btn-outline-light btn-lg">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Categories Section */}
  <section className="py-5">
    <div className="container">
      <div className="section-title">
        <h2>Browse Categories</h2>
      </div>
      <div className="row g-4">
        {/* React: Map through categories */}
        <div className="col-6 col-md-3">
          <div className="card text-center border-0 shadow-sm p-3 h-100">
            <div className="display-4 text-primary mb-2">
              <i className="fas fa-hamburger" />
            </div>
            <h5 className="card-title">Fast Food</h5>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card text-center border-0 shadow-sm p-3 h-100">
            <div className="display-4 text-primary mb-2">
              <i className="fas fa-pizza-slice" />
            </div>
            <h5 className="card-title">Pizza</h5>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card text-center border-0 shadow-sm p-3 h-100">
            <div className="display-4 text-primary mb-2">
              <i className="fas fa-carrot" />
            </div>
            <h5 className="card-title">Healthy</h5>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card text-center border-0 shadow-sm p-3 h-100">
            <div className="display-4 text-primary mb-2">
              <i className="fas fa-ice-cream" />
            </div>
            <h5 className="card-title">Dessert</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Featured Foods Section */}
  <section className="py-5 bg-light">
    <div className="container">
      <div className="section-title">
        <h2>Featured Items</h2>
      </div>
      <div className="row g-4">
        {/* React: Map through featured foods */}
        {/* Item 1 */}
        <div className="col-md-6 col-lg-3">
          <div className="card food-card h-100">
            <div className="position-relative">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Burger" />
              <span className="badge badge-custom position-absolute top-0 end-0 m-2">Fast Food</span>
            </div>
            <div className="card-body food-card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h5 className="card-title mb-0">Classic Burger</h5>
                <span className="food-rating"><i className="fas fa-star" /> 4.5</span>
              </div>
              <p className="card-text text-muted small flex-grow-1">
                Juicy beef patty with fresh lettuce, tomatoes, and our
                secret sauce.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="food-price">$8.99</span>
                <button className="btn btn-sm btn-outline-primary btn-add-to-cart">
                  <i className="fas fa-cart-plus" /> Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="col-md-6 col-lg-3">
          <div className="card food-card h-100">
            <div className="position-relative">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Pizza" />
              <span className="badge badge-custom position-absolute top-0 end-0 m-2">Pizza</span>
            </div>
            <div className="card-body food-card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h5 className="card-title mb-0">Pepperoni Pizza</h5>
                <span className="food-rating"><i className="fas fa-star" /> 4.8</span>
              </div>
              <p className="card-text text-muted small flex-grow-1">
                Classic pepperoni pizza with extra cheese and crispy crust.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="food-price">$12.99</span>
                <button className="btn btn-sm btn-outline-primary btn-add-to-cart">
                  <i className="fas fa-cart-plus" /> Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Item 3 */}
        <div className="col-md-6 col-lg-3">
          <div className="card food-card h-100">
            <div className="position-relative">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Salad" />
              <span className="badge badge-custom position-absolute top-0 end-0 m-2">Healthy</span>
            </div>
            <div className="card-body food-card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h5 className="card-title mb-0">Greek Salad</h5>
                <span className="food-rating"><i className="fas fa-star" /> 4.3</span>
              </div>
              <p className="card-text text-muted small flex-grow-1">
                Fresh cucumbers, tomatoes, olives, and feta cheese.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="food-price">$6.99</span>
                <button className="btn btn-sm btn-outline-primary btn-add-to-cart">
                  <i className="fas fa-cart-plus" /> Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Item 4 */}
        <div className="col-md-6 col-lg-3">
          <div className="card food-card h-100">
            <div className="position-relative">
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Cake" />
              <span className="badge badge-custom position-absolute top-0 end-0 m-2">Dessert</span>
            </div>
            <div className="card-body food-card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h5 className="card-title mb-0">Chocolate Cake</h5>
                <span className="food-rating"><i className="fas fa-star" /> 4.9</span>
              </div>
              <p className="card-text text-muted small flex-grow-1">
                Rich chocolate layer cake with ganache frosting.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="food-price">$5.99</span>
                <button className="btn btn-sm btn-outline-primary btn-add-to-cart">
                  <i className="fas fa-cart-plus" /> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <a href="foods.html" className="btn btn-outline-primary">View All Foods</a>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="py-5">
    <div className="container">
      <div className="bg-primary text-white rounded-3 p-5 text-center">
        <h2>Join FreshBite Today</h2>
        <p className="lead">Get 20% off your first order when you register.</p>
        <a href="register.html" className="btn btn-light btn-lg mt-3 text-primary fw-bold">Create Account</a>
      </div>
    </div>
  </section>
</main>

    </>
  )
}

export default Home