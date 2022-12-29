import { html } from '../lib.js'


let homeTemplate = (peopleCatalog) => html `
 <section id="welcomePage">
 <div class="container-fluid bg-1 text-center">
 
  <img src="./images/opening.png" class="img-circle" alt="Bird" width="350" height="350">
  
</div>





<div class=" bg-2 text-center">
  <h3>ОБСЛУЖВАТ ВИ ПРОФЕСИОНАЛНИ БАРБЕРИ</h3>
  <p>Желаният мъж е поддържаният мъж. Доверете се на екипа ни от професионални бръснари да създадем и оформим вашата модерна визия.
     Ще се порадвате на мъжко време за себе си,
    а ние ще се погрижим да се върнете отново с усмивка. </p>
    <section class="container">
           
            <article class="review">
                <div class="img-container">
                    <img src="./images/barber38.png" id="person-img"  />
                </div>
                <h4 id="author">Иван</h4>
                <p id="job">Топ бръснар в центъра</p>
                
      <button class="info" onclick="window.location.href='/book';" >Резервирай сега</button>
                <br>
          
                <div class="button-container">
                    <button class="prev-btn">
              <i class="fas fa-chevron-left"></i>
            </button>
                    <button  class="next-btn">
              <i class="fas fa-chevron-right"></i>
            </button>
                </div>
            </article>
        </section>
        

  <div class=" bg-3 ">
  <h3>С УСЛУГИТЕ НА HEADHUNTERS БАРБЕРШОП ЩЕ СТЕ ВИНАГИ УНИКАЛНИ</h3>
  <p>Запишете се сега и ще получите професионална помощ в избирането на вашата най-добра визия и продукти специално за вашия тип коса.</p>
  <button class="info" onclick="window.location.href='/service';" >Услуги</button>

  </div>
        </section>
`

export function showHome(ctx) {

    ctx.render(homeTemplate())



}