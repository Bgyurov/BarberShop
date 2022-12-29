import { logout } from '../api/user.js';
import { html, render, page } from '../lib.js'
import { getUserData } from "../util.js";

const nav = document.querySelector('header')
const navTemplate = (hasUser) => html `
<!-- <nav>
                <img src="./images/barber.png">
                <a href="/">Home</a>
                <ul>
                    
                    <li><a href="/catalog">Catalog</a></li>
                   
                    ${!hasUser ? html`
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    `: html`
                    <li><a href="/create">Create Album</a></li>
                    <li><a  href="/choice">Logout</a></li> `}
                    
                </ul>
            </nav>
  -->
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #FFACB7;">
  <div class="container-fluid">
  <a class="navbar-brand" href="/">
      <img src="./images/barber.png" alt="Logo" width="50" height="46" class="d-inline-block align-text-top">
    
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/service">Услуги</a>

        <a class="nav-link" href="/book">Резервация</a>

        ${!hasUser ? html`
        <a class="nav-link" href="/login">Login</a>
        <a class="nav-link" href="/register">Register</a>
        `: html`
        <a class="nav-link" href="/choice">Logout</a> `}
     
      </div>
    </div>
  </div>
</nav>
`

export async function updateNav() {
    const user = await getUserData()

    render(navTemplate(user), nav)
}
export async function onLogout() {
    await logout()
    updateNav()
    page.redirect('/')
}