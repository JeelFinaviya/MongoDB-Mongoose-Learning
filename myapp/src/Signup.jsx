import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
                axios.post("http://localhost:5000/signup", {
                username,
            });

            alert("👋 Welcome: " + username);
            setUsername("");
        } catch (error) {
            console.error(error);
            alert("An error occurred!");
        }
    };

    return (
        <div>
        <form onSubmit={handleSignup}>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input type="submit" value="Signup" />
        </form>
        </div>
    );
};

export default Signup;