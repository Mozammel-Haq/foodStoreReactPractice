const FoodDetails = () => {
  return (
        <main className="container py-5">
  <div className="row">
    {/* Product Image */}
    <div className="col-md-6 mb-4">
      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="img-fluid rounded-3 shadow" alt="Classic Burger" />
    </div>
    {/* Product Details */}
    <div className="col-md-6">
      <div className="d-flex justify-content-between align-items-start">
        <h1 className="mb-2">Classic Burger</h1>
        <span className="badge badge-custom fs-6">Fast Food</span>
      </div>
      <div className="mb-3">
        <span className="text-warning me-2"><i className="fas fa-star" /> 4.5</span>
        <span className="text-muted">(120 reviews)</span>
      </div>
      <h3 className="text-primary fw-bold mb-4">$8.99</h3>
      <p className="lead text-muted mb-4">
        A mouth-watering classic beef burger featuring a juicy, seasoned
        patty topped with fresh lettuce, ripe tomatoes, onions, pickles, and
        our signature secret sauce, all served on a toasted sesame seed bun.
      </p>
      {/* Nutrition Facts */}
      <div className="card bg-light border-0 mb-4">
        <div className="card-body">
          <h6 className="card-title">
            <i className="fas fa-info-circle me-2" />Nutrition Facts
          </h6>
          <div className="row text-center mt-3">
            <div className="col-3 border-end">
              <small className="d-block text-muted">Calories</small>
              <strong>550</strong>
            </div>
            <div className="col-3 border-end">
              <small className="d-block text-muted">Protein</small>
              <strong>28g</strong>
            </div>
            <div className="col-3 border-end">
              <small className="d-block text-muted">Carbs</small>
              <strong>45g</strong>
            </div>
            <div className="col-3">
              <small className="d-block text-muted">Fat</small>
              <strong>25g</strong>
            </div>
          </div>
        </div>
      </div>
      {/* Expiry Date Placeholder */}
      <div className="alert alert-info py-2 mb-4">
        <small><i className="far fa-clock me-2" />Best before:
          <strong>2025-12-31</strong></small>
      </div>
      {/* Add to Cart */}
      <div className="d-flex gap-3">
        <div className="input-group" style={{width: 140}}>
          <button className="btn btn-outline-secondary" type="button">-</button>
          <input type="text" className="form-control text-center" defaultValue={1} readOnly />
          <button className="btn btn-outline-secondary" type="button">+</button>
        </div>
        <button className="btn btn-primary flex-grow-1 btn-add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  {/* Related Products */}
  <div className="mt-5 pt-5 border-top">
    <h3 className="mb-4">You might also like</h3>
    <div className="row g-4">
      <div className="col-md-4 col-lg-3">
        <div className="card food-card h-100">
          <div className="position-relative">
            <a href="food-details.html">
              <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Chicken Burger" />
            </a>
          </div>
          <div className="card-body food-card-body">
            <h5 className="card-title">Chicken Burger</h5>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="food-price">$7.99</span>
              <button className="btn btn-sm btn-outline-primary btn-add-to-cart">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="card food-card h-100">
          <div className="position-relative">
            <a href="food-details.html">
              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top food-card-img-top" alt="Fries" />
            </a>
          </div>
          <div className="card-body food-card-body">
            <h5 className="card-title">French Fries</h5>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="food-price">$3.99</span>
              <button className="btn btn-sm btn-outline-primary btn-add-to-cart">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default FoodDetails