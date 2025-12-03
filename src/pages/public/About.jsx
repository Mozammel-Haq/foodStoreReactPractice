import React from 'react'
import { useUser } from '../../contexts/userContext'


const About = () => {
  const {user} = useUser()
  console.log(user)
  return (
    <>
<main className="container py-5">
  <div className="row align-items-center">
    <div className="col-lg-6">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-3 shadow" alt="About Us" />
    </div>
    <div className="col-lg-6 mt-4 mt-lg-0">
      <h1 className="mb-4">About FreshBite</h1>
      <p className="lead text-muted">
        We are passionate about bringing the freshest, highest quality food
        directly to your table.
      </p>
      <p>
        Founded in 2025, FreshBite started with a simple mission: to make
        healthy, delicious food accessible to everyone. We partner with
        local farmers and top chefs to curate a menu that satisfies every
        craving while maintaining high nutritional standards.
      </p>
      <div className="row mt-4">
        <div className="col-6">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-check-circle text-primary me-2 fa-lg" />
            <span>Fresh Ingredients</span>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-check-circle text-primary me-2 fa-lg" />
            <span>Fast Delivery</span>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-check-circle text-primary me-2 fa-lg" />
            <span>Top Chefs</span>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-check-circle text-primary me-2 fa-lg" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default About