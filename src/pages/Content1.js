import React from 'react'

const Content1 = () => {
  return (
    <>
        <div className="container">
            <div className="row align-items-start">
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                One of three columns
                </div>
                <div className="col">
                One of three columns
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col">
                One of three columns
                </div>
                <div className="col">
                One of three columns
                </div>
                <div className="col">
                One of three columns
                </div>
            </div>
            <div className="row align-items-end">
                <div className="col">
                One of three columns
                </div>
                <div className="col">
                One of three columns
                </div>
                <div className="col">
                One of three columns
                </div>
            </div>
        </div>
    </>
  )
}

export default Content1