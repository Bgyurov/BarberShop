import { html } from "../lib.js";
import { login } from "../api/user.js"
import { createSubmitHandler } from "../util.js";



const loginTemplate = (onLogin) => html `
 <section id="loginPage">
 <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
                    <h1 class="fw-bold mb-0 fs-2">login</h1>
              
                </div>
                        
                    <form @submit=${onLogin}>
                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="form-control" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="form-control" name="password" type="password" placeholder="Password">

                   

                    <button type="submit" class="register">Login</button>
                        <span>If you don't have profile click <a href="/register">here</a></span>
    
        </form>
        </section>
`

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)))

    async function onLogin({ email, password }) {
        if (email == '' || password == '') {
            return alert('All fields are required!')
        }
        await login(email, password)
        alert("Successful login , welcome")

        ctx.updateNav()
        ctx.page.redirect('/')
    }
}