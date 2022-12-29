import { render, page } from './lib.js'
import { getUserData } from './util.js'
import { showBooking } from './views/book.js'
import { showCatalog } from './views/catalog.js'
import { showChoice } from './views/choice.js'
import { showHome } from './views/home.js'
import { showLogin } from './views/login.js'
import { updateNav } from './views/nav.js'
import { showRegister } from './views/register.js'


const main = document.getElementById('main-content')
    // document.getElementById("logoutBtn").addEventListener('click',onLogout)

page(decorateContext)
page('/', showHome)
page('/service', showCatalog)
page('/book', showBooking)
page('/choice', showChoice)
page('/edit/:id', () => console.log('edit'))
page('/login', showLogin)
page('/register', showRegister)
page('/create', () => console.log('create'))

updateNav()
page.start()

function decorateContext(ctx, next) {
    ctx.render = renderMain
    ctx.updateNav = updateNav

    const user = getUserData()
    if (user) {
        ctx.user = user
    }

    next()

}

function renderMain(content) {
    render(content, main)
}