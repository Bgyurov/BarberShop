import { html } from '../lib.js'

const catalogTemplate = () => html `
<section id="catalogPage">
<h1>Услуги</h1>

<div class="card-box">
    <img src="https://res.cloudinary.com/dsh2bszcx/image/upload/v1672327978/nz/u2_xhrdjn.png">
    <div>
    <div class="text-center">
            <p class="name">Оформяне на брада</p>
            <p class="artist">Символ на мъжественост</p>
            <p class="genre">-------------------------------</p>
            <p class="price">Junior Бръснар: 12 лв (30 мин)</p>
            <p class="price"> Бръснар: 25 лв (30 мин)</p>
            <p class="price"> Топ-Бръснар: 30 лв (30 мин)</p>
            <p class="price">  Senior Бръснар: 35 лв (30 мин)</p>
            <p class="price">  Шеф-Бръснар: 40 лв (30 мин)</p>
        </div>
        
    </div>
</div>

<div class="card-box">
    <img src="https://res.cloudinary.com/dsh2bszcx/image/upload/v1672327978/nz/u1_jfauet.png">
    <div>
        <div class="text-center">
            <p class="name">Мъжко подстригване</p>
            <p class="artist">Модерната визия</p>
            <p class="genre">-------------------------------</p>
            <p class="price">Junior Бръснар: 20 лв (60 мин)</p>
            <p class="price"> Бръснар: 35 лв (60 мин)</p>
            <p class="price"> Топ-Бръснар: 40 лв (60 мин)</p>
            <p class="price">  Senior Бръснар: 45 лв (60 мин)</p>
            <p class="price">  Шеф-Бръснар: 50 лв (60 мин)</p>
        </div>
        
        
    </div>
</div>

<div class="card-box">
    <img src="https://res.cloudinary.com/dsh2bszcx/image/upload/v1672327965/nz/u4_hume0n.png">
    <div>
    <div class="text-center">
            <p class="name">Баща и син</p>
            <p class="artist">Семейна традиция</p>
            <p class="genre">-------------------------------</p>
            <p class="price">Junior Бръснар: 30 лв (120 мин)</p>
            <p class="price"> Бръснар: 65 лв (120 мин)</p>
            <p class="price"> Топ-Бръснар: 70 лв (120 мин)</p>
            <p class="price">  Senior Бръснар: 80 лв (120 мин)</p>
            <p class="price">  Шеф-Бръснар: -------------</p>
        </div>
    
    </div>
</div>

<div class="card-box">
    <img src="https://res.cloudinary.com/dsh2bszcx/image/upload/v1672327965/nz/u6_uyafpt.png">
    <div>
        <div class="text-center">
            <p class="name">Kралско бръснене</p>
            <p class="artist">Спазваме традициите</p>
            <p class="genre">-------------------------------</p>
            <p class="price">Junior Бръснар: -------------</p>
            <p class="price"> Бръснар: 30 лв (60 мин)</p>
            <p class="price"> Топ-Бръснар: 35 лв (60 мин)</p>
            <p class="price">  Senior Бръснар: 40 лв (60 мин)</p>
            <p class="price">  Шеф-Бръснар: 45 лв (60 мин)</p>
        </div>
        
        
    </div>
</div>
<div class="card-box">
    <img src="https://res.cloudinary.com/dsh2bszcx/image/upload/v1672327965/nz/u11_c5v1d6.png">
    <div>
        <div class="text-center">
            <p class="name">Бръснене на глава</p>
            <p class="artist">Най-гладкото бръснене</p>
            <p class="genre">-------------------------------</p>
            <p class="price">Junior Бръснар: -------------</p>
            <p class="price"> Бръснар: 30 лв (60 мин)</p>
            <p class="price"> Топ-Бръснар: 35 лв (60 мин)</p>
            <p class="price">  Senior Бръснар: 40 лв (60 мин)</p>
            <p class="price">  Шеф-Бръснар: 45 лв (60 мин)</p>
        </div>
        
        
    </div>
</div>
<div class="card-box">
    <img src="https://res.cloudinary.com/dsh2bszcx/image/upload/v1672327965/nz/u14_jwjlda.png">
    <div>
        <div class="text-center">
            <p class="name">Почистване на лице</p>
            <p class="artist">Свежа и чиста кожа</p>
            <p class="genre">-------------------------------</p>
            <p class="price">Junior Бръснар: -------------</p>
            <p class="price"> Бръснар: 25 лв (60 мин)</p>
            <p class="price"> Топ-Бръснар: 25 лв (60 мин)</p>
            <p class="price">  Senior Бръснар: 25 лв (60 мин)</p>
            <p class="price">  Шеф-Бръснар: 40 лв (60 мин)</p>
        </div>
        
        
    </div>
</div>


</section>
`

export function showCatalog(ctx) {

    ctx.render(catalogTemplate())

}