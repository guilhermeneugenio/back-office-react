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

    let createUser = function (name) {
        axios.post(baseURL, { "name": name }).then((response) => {
            return response.data
        });
    };

    return {
        getName: getName,
        setName: setName,
        createUser: createUser
    }

})();

export default UserProfile;