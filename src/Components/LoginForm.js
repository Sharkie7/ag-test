import React, { useEffect, useState } from 'react'
import './loginStyles.css';

const LoginForm = () => {

    const [login, setLogin] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
        window.zipy.identify("987680762345", {
            firstName: "Ratan",
            lastName: "Tata",
            email: "ratan.tata@tata.com",
            customerName: "TATA",
            age: "64"
        });
        fetch("API Address", {
            method: "POST",
            body: JSON.stringify({
                email: "test-mail",
                password: "test-password"
            }),
        })
            .then((response) => {
                response.json()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // useEffect(() => {
    //     let cookie = document.cookie;
    //     let cookieArray = cookie.split(';');
    //     cookieArray.map((i) => {
    //         let data = i.trim();
    //         data = data.split('=')
    //         if(data[0]==='login' && data[1]==='true') {
    //             setLogin(true);
    //             handleSubmit();
    //         }
    //     })
    // })

    const [stop, setStop] = useState(false);
    const handleForgot = () => {
        setStop(!stop);
    }

    useEffect(() => {
        // const daa = setInterval(() => {
        //     const a = document.getElementById('random-id');
        //     a.click();
        // }, 2000);
        // if (stop) {
        //     clearInterval(daa);
        //     console.log('Stopping the automation')
        // }
    }, [])
    

    return (
        <div className="modal">

            <form>
                <div className="container">
                    <input type="text" placeholder="Enter Username" name="username" required />
                    <input type="password" placeholder="Enter Password" name="password" required />                    
                    <button type="submit"
                        className='button-29'
                        style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', width: '110px' }}
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    {
                        login && 
                        <div>
                            <h1>Hello, you are logged in now</h1>
                        </div>
                    }
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '100px' }}>
                            <input id='random-id' type="checkbox" placeholder='checkbox' />
                            <label>Remember password</label>
                        </div>
                        <a href="#" onClick={handleForgot}>Forgot password? </a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm