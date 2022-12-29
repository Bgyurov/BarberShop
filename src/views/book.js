import { html } from '../lib.js'
import { createSubmitHandler } from '../util.js'


let bookTemplate = (onBook) => html `
 <section id="bookPage">
 <form @submit=${onBook}>
  <div class="form-group row">
    <label for="inputName3" class="col-sm-2 col-form-label" >Име:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" name="name" required>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputNumber3" class="col-sm-2 col-form-label">Телефон:</label>
    <div class="col-sm-10">
      <input type="number" class="form-control"  id="number" name="number" required>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" name="email" >
    </div>
  </div>
  <div class="form-group row">
      <label for="inputStaff3" class="col-sm-2 col-form-label">Екип:</label>
      <div class="col-sm-10">
      <select  id="staff" name='staff'>
        <option selected>Избери майстор</option>
        <option value="Николай | ЛОЗЕНЕЦ">Николай | ЛОЗЕНЕЦ</option>
        <option value="Калоян |  БУЛЕВАРД ЛЕВСКИ">Калоян |  БУЛЕВАРД ЛЕВСКИ</option>
        <option value="Веселин | АЛБИН">Веселин | АЛБИН</option>
        <option value="Иван | ЦЕНТЪРА">Иван | ЦЕНТЪРА</option>
    </select>
    </div>
    <div class="form-group row">
      <label for="inputStaff3" class="col-sm-2 col-form-label">Екип:</label>
      <div class="col-sm-10">
      <select  id="customs" name='customs'>
        <option selected>Изберете услуга</option>
        <option value="Оформяне на брада">Оформяне на брада</option>
        <option value="Мъжко подстригване">Мъжко подстригване</option>
        <option value="Баща и син">Баща и син</option>
        <option value="Kралско бръснене">Kралско бръснене</option>
        <option value="Бръснене на глава">Бръснене на глава</option>
        <option value="Почистване на лице">Почистване на лице</option>

    </select>
    </div>

      </select>
    </div>
 
    <div class="table-responsive-sm">          
        <table class="table table-bordered">
            <thead>
                <tr>
            <th><input type='date'></th>
            <th>10:00</th>
            <th>11:00</th>
            <th>12:00</th>
            <th>13:00</th>
            <th>14:00</th>
            <th>15:00</th>
            <th>16:00</th>
            <th>17:00</th>
            <th>18:00</th>
            <th>19:00</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Иван</td>
            <td>X</td>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
<tbody>
    <tr>
        <td>Веселин</td>
        <td>X</td>
        <td></td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td></td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td></td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Николай</td>
        <td>X</td>
        <td></td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td></td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td></td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Калоян</td>
        <td>X</td>
        <td></td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td></td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td></td>
    </tr>
</tbody>
</table>
</div>
</div>
<div class="form-group row">
  <div class="col-sm-10">
    <button type="submit" class="btn btn-primary">Резервирай</button>
  </div>
</div>
</form>
</section>
<div class='booking'>

</div>
`

export function showBooking(ctx) {

    ctx.render(bookTemplate(createSubmitHandler(onBook)))

    async function onBook({ name, email, number, staff, customs }) {
        console.log(name, email, number, staff, customs);
        let parent = document.querySelector('.booking')
        let card = document.createElement('article')
        card.innerHTML = `<h1> Вашата резервация е готова </h1> 
        <p> ${name} </p>
        <p> ${email} </p>
        <p> ${number} </p>
        <p> ${customs} </p>
        <p> ${staff} </p>`
        parent.appendChild(card)
    }



}