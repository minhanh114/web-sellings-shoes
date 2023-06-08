import React, { useState, Fragment } from "react"
import { useDispatch } from "react-redux";
import userActions from "../../actions/userAction";
// import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    // eslint-disable-next-line no-unused-vars
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.jpg");

    const dispatch = useDispatch();


    const handleSubmit = (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.set("name", name);
        formData.set("email", email);
        formData.set("password", password);
        formData.set("avatar", avatar);

        dispatch(userActions.register(formData))
    }

    const { name, email, password } = user;

    const onChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    // const Navigate = useNavigate();
    return (
        <Fragment>
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={handleSubmit} encType='multipart/form-data'>
                        <h1 className="mb-3"> Thông tin đăng ký</h1>
                        <div className="form-group">
                            <label htmlFor="name_field">Tên</label>
                            <br />
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={onChange}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <br />
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Mật khẩu</label>
                            <br />
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='avatar_upload'>Hình nền</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <figure className='avatar mr-3 item-rtl'>
                                        <img
                                            src={avatarPreview}
                                            className='rounded-circle'
                                            alt='Ảnh nền'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        accept="iamges/*"
                                        onChange={onChange}
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Chọn ảnh
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            // onClick={()=> Navigate("/login")}
                        >
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register