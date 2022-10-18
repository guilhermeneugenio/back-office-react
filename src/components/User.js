const User = ({ first_name, last_name, email, avatar }) => (
    <div className="justify-items-center text-center">
        <img src={avatar} alt='avatar' class="w-24 h-24 rounded-full mx-auto"></img>
        <h1>{first_name} {last_name}</h1>
        <h1>{email}</h1>
    </div>
);


export default User;