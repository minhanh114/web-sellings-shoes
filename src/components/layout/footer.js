import { Fragment } from "react"

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="footer-top section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12">
                                <div className="single-footer about">
                                    <div className="logo">
                                        <a href="/login"> <img src="/images/shopit_logo.png" alt="#" /> </a>
                                    </div>
                                    <h4>@Coppyright by Minh Anh</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer