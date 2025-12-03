import React from 'react'

const Cart = () => {
  return (
    <>
        <main className="container py-5">
  <h2 className="mb-4">Shopping Cart</h2>
  <div className="row">
    {/* Cart Items */}
    <div className="col-lg-8">
      {/* React: Map through cart items */}
      <div className="card mb-3 shadow-sm border-0">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-3 col-md-2">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60" className="img-fluid rounded cart-item-img" alt="Burger" />
            </div>
            <div className="col-9 col-md-5">
              <h6 className="mb-1">Classic Burger</h6>
              <p className="text-muted small mb-0">Fast Food</p>
              <p className="text-primary fw-bold mb-0">$8.99</p>
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0">
              <div className="input-group input-group-sm" style={{width: 100}}>
                <button className="btn btn-outline-secondary" type="button">
                  -
                </button>
                <input type="text" className="form-control text-center" defaultValue={2} readOnly />
                <button className="btn btn-outline-secondary" type="button">
                  +
                </button>
              </div>
            </div>
            <div className="col-6 col-md-2 mt-3 mt-md-0 text-end">
              <button className="btn btn-sm btn-outline-danger">
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 shadow-sm border-0">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-3 col-md-2">
              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60" className="img-fluid rounded cart-item-img" alt="Fries" />
            </div>
            <div className="col-9 col-md-5">
              <h6 className="mb-1">French Fries</h6>
              <p className="text-muted small mb-0">Sides</p>
              <p className="text-primary fw-bold mb-0">$3.99</p>
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0">
              <div className="input-group input-group-sm" style={{width: 100}}>
                <button className="btn btn-outline-secondary" type="button">
                  -
                </button>
                <input type="text" className="form-control text-center" defaultValue={1} readOnly />
                <button className="btn btn-outline-secondary" type="button">
                  +
                </button>
              </div>
            </div>
            <div className="col-6 col-md-2 mt-3 mt-md-0 text-end">
              <button className="btn btn-sm btn-outline-danger">
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Summary */}
    <div className="col-lg-4 mt-4 mt-lg-0">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h5 className="card-title mb-4">Order Summary</h5>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Subtotal</span>
            <span>$21.97</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Delivery Fee</span>
            <span>$2.00</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Tax</span>
            <span>$1.10</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-4">
            <span className="fw-bold">Total</span>
            <span className="fw-bold text-primary">$25.07</span>
          </div>
          <a href="checkout.html" className="btn btn-primary w-100 py-2">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default Cart