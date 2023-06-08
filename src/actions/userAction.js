import axios from "axios";

const userActions = {
    login: (email, password) => async (dispatch) =>{
        try {
            dispatch({type: "LOGIN_REQUEST"})

            const config = {
                headers : {
                    "Content-Type": "application/json"
                }
            }

            const { data } = await axios.post('/api/v1/login', { email, password }, config)

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: data.user
            })
        }
        catch(error){
            dispatch({
                type: "LOGIN_ERROR",
                payload: error.response.data.error
            })
        }
    },

    register: (userData) => (dispatch) =>{
        try {
            dispatch({type: "REGISTER_USER_REQUEST"})

            const config = {
                headers : {
                    "Content-Type": "multipart/form-data"
                }
            }

            const { data } = axios.post('/api/v1/register', userData, config);

            dispatch({
                type: "REGISTER_USER_SUCCESS",
                payload: data.user
            })
        }catch(error){
            dispatch({
                type: "REGISTER_USER_FAIL",
                payload: error.response.data.error
            })
        }
    },

    clearErrors : () => async (dispatch) => {
        dispatch({
            type: "CLEAR_ERRORS"
        })
    }
}

export default userActions;