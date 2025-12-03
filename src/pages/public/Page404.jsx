import React from 'react'

const Page404 = () => {
  return (
    <>
<main className="container py-5 text-center">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="py-5">
        <h1 className="display-1 fw-bold text-muted">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead text-muted mb-5">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="index.html" className="btn btn-primary btn-lg">Go to Homepage</a>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default Page404