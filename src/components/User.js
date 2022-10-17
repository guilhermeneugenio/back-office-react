const User = ({ first_name, last_name, email, avatar }) => (
    <div>
        <div>
            <img src={avatar} alt='avatar'></img>
            <p>{first_name} {last_name}</p>
            <p>{email}</p>
        </div>
    </div>
);


export default User;