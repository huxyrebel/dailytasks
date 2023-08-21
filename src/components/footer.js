import React from 'react'
import"../components/footer.css"
function Footer() {
  return (
    <section className="  body-font relative q">
    <div className="container px-5 py-24 mx-auto">
        <div className="row justify-content-center align-items-center mb-12">
            <div className="col text-center ">
                <h1 className="sm-text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
                <p className="lg-w-2/3 mx-auto lead text-base text-white">Whatever cardigan tote bag tumblr hexagon brooklyn
                    asymmetrical gentrify.</p>
            </div>
        </div>
        <div className="row justify-content-center align-items-center w">
            <div className="col-lg-6 col-md-8">
                <div className="row ">
                    <div className="col-md-6 mb-3">
                        <input className="w-100 bg-gray-800 rounded border border-gray-700 text-white form-control" placeholder="Name" type="text" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input className="w-100 bg-gray-800 rounded border border-gray-700 text-white form-control text-white" placeholder="Email" type="email" />
                    </div>
                    <div className="col-12 mb-3">
                        <textarea className="w-100 bg-gray-800 rounded border border-gray-700 text-white form-control h-48 resize-none" placeholder="Message"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary d-block mx-auto py-2 px-4 text-lg" style={{backgroundColor:"#38b2ac",border:"none"}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer