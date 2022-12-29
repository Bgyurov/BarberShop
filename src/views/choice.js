import { html } from '../lib.js'
import { onLogout } from './nav.js'

const choiceTemplate = () => html `
 <section id="welcomePage">
 <div class="modal modal-alert position-static d-block  py-5" >
  <div class="modal-dialog" role="document">
    <div class="modal-content ">
      <div class="modal-body p-4 text-center">
        <h5 class="mb-0">Сигурен ли сте ,че искате да излезете от профила?</h5>
       
      </div>
        <div class="text-center">

          <button type="button" @click=${onLogout} class="btn btn-lg btn-link  text-decoration-none col-6 m-0 rounded-0 border-end"  ><strong>Да</strong></button>
        </div>
       
      
    </div>
  </div>
</div>
        </section>
`


export function showChoice(ctx) {

    ctx.render(choiceTemplate())


}