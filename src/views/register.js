import { html } from "../lib.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html `
   <section id="registerPage">
       
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
                    <h1 class="fw-bold mb-0 fs-2">Register for free</h1>
              
                </div>
                        
                    <form @submit=${onRegister}>
                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="form-control" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="form-control" name="password" type="password" placeholder="Password">

                    <label for="repeatPass" class="vhide">Confirm Password:</label>
                    <input id="repeatPass" class="form-control" name="repeatPass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>
                        <span>If you already have profile click <a href="/login">here</a></span>
    
        </form>

</section>
`

export function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)))

    async function onRegister({ email, password, repeatPass }) {


        if (email == '' || password == '') {
            return alert('All fields are required!')
        }
        if (password != repeatPass) {
            return alert('Password dont match!')

        }
        await register(email, password)
        ctx.updateNav()
        ctx.page.redirect('/')

    }

}