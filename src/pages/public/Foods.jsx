import React from 'react'

const Foods = () => {
  return (
    <>
  <main className="container py-5">
  <div className="section-title">
    <h2>Our Menu</h2>
  </div>
  {/* Search & Filter */}
  <div className="row mb-4">
    <div className="col-md-6 mb-3 mb-md-0">
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0"><i className="fas fa-search text-muted" /></span>
        <input type="text" className="form-control border-start-0 ps-0" placeholder="Search food..." />
      </div>
    </div>
    <div className="col-md-6">
      <select className="form-select">
        <option selected>All Categories</option>
        <option value={1}>Fast Food</option>
        <option value={2}>Pizza</option>
        <option value={3}>Healthy</option>
        <option value={4}>Dessert</option>
      </select>
    </div>
  </div>
  {/* Food Grid */}
  <div className="row g-4">
    {/* React: Map through all foods */}
    {/* Item 1 */}
    <div className="col-md-6 col-lg-3">
      <div className="card food-card h-100">
        <div className="position-relative">
          <a href="food-details.html">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Burger" />
          </a>
          <span className="badge badge-custom position-absolute top-0 end-0 m-2">Fast Food</span>
        </div>
        <div className="card-body food-card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">
              <a href="food-details.html" className="text-decoration-none text-dark">Classic Burger</a>
            </h5>
            <span className="food-rating"><i className="fas fa-star" /> 4.5</span>
          </div>
          <p className="card-text text-muted small flex-grow-1">
            Juicy beef patty with fresh lettuce, tomatoes, and our secret
            sauce.
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
          <a href="food-details.html">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Pizza" />
          </a>
          <span className="badge badge-custom position-absolute top-0 end-0 m-2">Pizza</span>
        </div>
        <div className="card-body food-card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">
              <a href="food-details.html" className="text-decoration-none text-dark">Pepperoni Pizza</a>
            </h5>
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
          <a href="food-details.html">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Salad" />
          </a>
          <span className="badge badge-custom position-absolute top-0 end-0 m-2">Healthy</span>
        </div>
        <div className="card-body food-card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">
              <a href="food-details.html" className="text-decoration-none text-dark">Greek Salad</a>
            </h5>
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
          <a href="food-details.html">
            <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Cake" />
          </a>
          <span className="badge badge-custom position-absolute top-0 end-0 m-2">Dessert</span>
        </div>
        <div className="card-body food-card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">
              <a href="food-details.html" className="text-decoration-none text-dark">Chocolate Cake</a>
            </h5>
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
    {/* Item 5 */}
    <div className="col-md-6 col-lg-3">
      <div className="card food-card h-100">
        <div className="position-relative">
          <a href="food-details.html">
            <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Pizza" />
          </a>
          <span className="badge badge-custom position-absolute top-0 end-0 m-2">Pizza</span>
        </div>
        <div className="card-body food-card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">
              <a href="food-details.html" className="text-decoration-none text-dark">Veggie Pizza</a>
            </h5>
            <span className="food-rating"><i className="fas fa-star" /> 4.2</span>
          </div>
          <p className="card-text text-muted small flex-grow-1">
            Loaded with bell peppers, onions, mushrooms, and olives.
          </p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="food-price">$11.99</span>
            <button className="btn btn-sm btn-outline-primary btn-add-to-cart">
              <i className="fas fa-cart-plus" /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Item 6 */}
    <div className="col-md-6 col-lg-3">
      <div className="card food-card h-100">
        <div className="position-relative">
          <a href="food-details.html">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Burger" />
          </a>
          <span className="badge badge-custom position-absolute top-0 end-0 m-2">Fast Food</span>
        </div>
        <div className="card-body food-card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">
              <a href="food-details.html" className="text-decoration-none text-dark">Chicken Burger</a>
            </h5>
            <span className="food-rating"><i className="fas fa-star" /> 4.6</span>
          </div>
          <p className="card-text text-muted small flex-grow-1">
            Crispy chicken fillet with mayo and lettuce.
          </p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="food-price">$7.99</span>
            <button className="btn btn-sm btn-outline-primary btn-add-to-cart">
              <i className="fas fa-cart-plus" /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pagination */}
  <nav className="mt-5">
    <ul className="pagination justify-content-center">
      <li className="page-item disabled">
        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
      </li>
      <li className="page-item active"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item">
        <a className="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</main>

    </>
  )
}

export default Foods