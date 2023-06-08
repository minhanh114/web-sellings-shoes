import { Fragment } from "react"

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar brand">
                        <div className="logo">
                            <a href="/login"> <img src="/images/shopit_logo.png" className="header-img" alt="#" /> </a>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header