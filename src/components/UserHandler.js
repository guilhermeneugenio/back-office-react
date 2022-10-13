var UserProfile = (function () {
    var full_name = "";

    var getName = function () {
        full_name = localStorage.getItem("active_session")
        return full_name;
    };

    var setName = function (name) {
        full_name = name;
        localStorage.setItem("active_session", full_name)
    };

    return {
        getName: getName,
        setName: setName
    }

})();

export default UserProfile;