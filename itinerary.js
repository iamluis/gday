import { html, render } from 'https://esm.sh/htm/preact/standalone'


function Image(props) {
    return html`<img src="${props.src}" alt="${props.src}"/>`;
}

function Itinerary(props) {
    return html`
<div class="ininerary-item left">
<${Image} src="/assets/svg/01-atterizage-asturias.svg" name="landing"/>
</div>
<div class="ininerary-item right">
<${Image} src="/assets/svg/02-gijon.svg" name="gijon"/>
</div>
<div class="ininerary-item left">
<${Image} src="/assets/svg/03-cidreria-visita.svg" name="cidreria"/>
</div>
<div class="ininerary-item right">
<${Image} src="/assets/svg/04-experiencia-asturia.svg" name="asturia"/>
</div>
<div class="ininerary-item left">
<${Image} src="/assets/svg/05-descenso-sella.svg" name="sella" />
</div>
<div class="ininerary-item right">
<${Image} src="/assets/svg/06-beach-day.svg" name="beach"/>
</div>
<div class="ininerary-item left">
<${Image} src="/assets/svg/07-visita-a-comillas.svg" name="comillas"/>
</div>
<div class="ininerary-item right">
<${Image} src="/assets/svg/10-cena-santander.svg" name="santander"/>
</div>
<div class="ininerary-item left">
<${Image} src="/assets/svg/11-ocaso-tapas.svg" name="tapas"/>
</div>
`;
}

render(html`<${Itinerary} name="from Preact" />`, document.getElementById("itinerary"));