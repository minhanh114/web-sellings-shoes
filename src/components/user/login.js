import React, { useState, Fragment, useEffect } from "react"
import { Link } from 'react-router-dom'
// import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import userActions from "../../actions/userAction"

const Login = ({ history, location}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [rememberMe, setRemember] = useState(false)

    // const handleRememberMe = () => {
    //     setRemember(!rememberMe)
    // }

    // const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error } = useSelector(state => state.auth)

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() =>{
        
        if (isAuthenticated) {
            history.push("")
        }

        if (error){
            // alert.error(error)

            dispatch(userActions.clearErrors())
        }

    }, [dispatch, isAuthenticated, error, history])
    
    const submitHandle = (e) => {
        e.preventDefault()
        dispatch(userActions.login(email, password))
    }

    return (
        <Fragment>
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandle}>
                        <h1 className="mb-3"> Đăng nhập</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <br />
                            <input
                                type="email"
                                id="email_field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_field">Mật khẩu</label>
                            <br />
                            <input
                                type="password"
                                id="password_field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>
                        {/* <div className="form-group">
                            <input
                                type="checkbox"
                                id="remember_field"
                                checked={rememberMe}
                                onChange={handleRememberMe}
                            />
                            <label htmlFor="remember_field" className="remember-label">Ghi nhớ đăng nhập</label>
                        </div> */}

                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            Đăng nhập
                        </button>

                        <Link to="/register" className="float-right mt-3">
                            Bạn chưa có tài khoản?
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login