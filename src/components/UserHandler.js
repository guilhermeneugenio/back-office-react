import axios from "axios";
const UserProfile = (function () {

    const baseURL = "https://reqres.in/api/";

    let full_name = "";

    let getToken = function () {
        full_name = localStorage.getItem("active_session")
        return full_name;
    };

    let setToken = function (name) {
        full_name = name;
        localStorage.setItem("active_session", full_name)
    };

    /* NEWW SECTION */


    const login = async (email, password) => {
        try {
            const resp = await axios.post(baseURL + 'login', {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            });
            return resp.data;
        } catch (err) {
            // Handle Error Here
            return err
        }
    };

    const register = async (email, password) => {
        try {
            const resp = await axios.post(baseURL + 'register', {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            });
            return resp.data;
        } catch (err) {
            // Handle Error Here
            return err
        }
    };


    const getUsers = async () => {
        try {
            const resp = await axios.get(baseURL + 'users');
            return resp.data;
        } catch (err) {
            // Handle Error Here
            return err
        }
    };

    const createUser = async (first_name, last_name, email) => {
        try {
            const resp = await axios.post(baseURL + 'users', {
                "avatar": "https://www.cbns.org.au/wp-content/uploads/2017/05/img_placeholder_avatar.jpg",
                "first_name": first_name,
                "last_name": last_name,
                "email": email
            });
            return resp.data;
        } catch (err) {
            // Handle Error Here
            return err
        }
    };

    const updateUser = async (first_name, last_name, email) => {
        try {
            const resp = await axios.post(baseURL + 'users', {
                "avatar": "https://www.cbns.org.au/wp-content/uploads/2017/05/img_placeholder_avatar.jpg",
                "first_name": first_name,
                "last_name": last_name,
                "email": email
            });
            return resp.data;
        } catch (err) {
            // Handle Error Here
            return err
        }
    };

    return {
        getToken: getToken,
        setToken: setToken,
        login: login,
        register: register,
        getUsers: getUsers,
        createUser: createUser,
        updateUser: updateUser,
    }

})();

export default UserProfile;