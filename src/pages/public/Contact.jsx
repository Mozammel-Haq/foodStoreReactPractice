import React from 'react'

const Contact = () => {
  return (
    <>    
    <main className="container py-5">
  <div className="row justify-content-center">
    <div className="col-lg-8">
      <div className="card shadow-sm border-0">
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <p className="text-center text-muted mb-5">
            Have a question or feedback? We'd love to hear from you.
          </p>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="col-12">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows={5} placeholder="Your Message" defaultValue={""} />
              </div>
              <div className="col-12 text-center mt-4">
                <button type="submit" className="btn btn-primary px-5">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>
</>
  )
}

export default Contact