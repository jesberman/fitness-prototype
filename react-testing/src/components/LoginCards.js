import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const LoginCards = () => (

    <div id="cards">
        <div id="test-float" class="card text-white bg-primary mb-3">
            <div class="card-header">
                <h3 class="card-header">
                    Sign Up 
                </h3>
            </div>
            <div class="card-body">
                <form action="/action_page.php">
                    Username:
                    <input type="text" name="Username" defaultValue="">
                    </input>
                    <br></br> Password:
                    <input class="pass" type="text" name="password" defaultValue="">
                    </input>
                    <br></br>
                    {/* <input type="submit" value="Submit">
                    </input> */}
                    <a class="btn btn-primary btn-md standard-text" id="signup-button" href="" role="button">Submit</a>

                </form>
            </div>
        </div>

        <div class="card text-white bg-primary mb-3">
            <div class="card-header">
                <h3 class="card-header">
                    Login
                </h3>
            </div>
            <div class="card-body">
                <form action="/action_page.php">
                    Username:
                    <input type="text" name="Username" defaultValue="">
                    </input>
                    <br></br> 
                    Password:
                    <input class="pass" type="text" name="password" defaultValue="">
                    </input>
                    <br></br>
                    {/* <input type="submit" value="Submit">
                    </input> */}
                    <a class="btn btn-primary btn-md standard-text" id="signup-button" href="" role="button">Submit</a>

                </form>
            </div>
        </div>
    </div>
);

export default LoginCards;