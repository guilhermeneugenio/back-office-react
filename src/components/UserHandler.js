import axios from "axios";
const UserProfile = (function () {

    const baseURL = "https://reqres.in/api/users";

    let full_name = "";

    let getName = function () {
        full_name = localStorage.getItem("active_session")
        return full_name;
    };

    let setName = function (name) {
        full_name = name;
        localStorage.setItem("active_session", full_name)
    };

    /* NEWW SECTION */

    const getUsers = async () => {
        try {
            const resp = await axios.get(baseURL);
            return resp.data;
        } catch (err) {
            // Handle Error Here
            return err
        }
    };

    const createUser = async (first_name, last_name, email) => {
        try {
            const resp = await axios.post(baseURL, {
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
            const resp = await axios.post(baseURL, {
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
        getName: getName,
        setName: setName,
        getUsers: getUsers,
        createUser: createUser,
    }

})();

export default UserProfile;