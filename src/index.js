import "./styles/main.scss"
import data from "./data/coupons.js"

// get parent element for coupon listing
let all = document.getElementById('coupons-list')

// set dummy coupon data
let couponsData = data.coupons

// get filter buttons
let allButton = document.getElementById('all')
let expiringButton = document.getElementById('expiring')
let verifiedButton = document.getElementById('verified')
let codeButton = document.getElementById('code')

// adding event listeners on filtering buttons
allButton.addEventListener('click', (e) => {
  removeFilterActiveClasses(e)
  couponFiltering(couponsData, 'all')
})

expiringButton.addEventListener('click', (e) => {
  removeFilterActiveClasses(e)
  couponFiltering(couponsData, 'expiring')
})

verifiedButton.addEventListener('click', (e) => {
  removeFilterActiveClasses(e)
  couponFiltering(couponsData, 'verified')
})

codeButton.addEventListener('click', (e) => {
  removeFilterActiveClasses(e)
  couponFiltering(couponsData, 'code')
})

function couponFiltering (couponsData, filterType) {
  let filteredList = []
  couponsData.forEach(el => {
    switch(filterType) {
      case 'all':
        filteredList = data.coupons
        break;
      case 'expiring':
        if (el.dataExpiring < 7) {
          filteredList.push(el)
        }
        break;
      case 'verified':
        if (el.dataVerified === true) {
          filteredList.push(el)
        }
        break;
      case 'code':
        if (el.dataCode === true) {
          filteredList.push(el)
        }
        break;
    }
  })
  couponsData = filteredList
  listingCoupons(couponsData)
}

//  <svg src="${ /*require("./images/coupon-image.svg")*/ }"></svg> 
function listingCoupons (data) {
  all.innerHTML = ""
  data.forEach(el => {
    let article = `
    <article class="coupon-item" data-expiring="${ el.dataExpiring }" data-verified="${ el.dataVerified }" data-code="${ el.dataCode }">
      <section class="image">
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="170" height="153" viewBox="0 0 170 153"><defs><path id="b73ta" d="M119 471V318h170v153z"/><clipPath id="b73tb"><use fill="#fff" xlink:href="#b73ta"/></clipPath></defs><g><g transform="translate(-119 -318)"><use fill="#fff" xlink:href="#b73ta"/><use fill="#fff" fill-opacity="0" stroke="#d7d7d7" stroke-miterlimit="50" stroke-width="2" clip-path="url(&quot;#b73tb&quot;)" xlink:href="#b73ta"/></g><g transform="translate(-119 -318)"><g font-family="'Raleway-ExtraBold','Raleway-ExtraBold'" font-size="14" font-style="none" font-weight="400" style="line-height:18px"><text dominant-baseline="text-before-edge" font-family="Helvetica, Arial, sans-serif" transform="translate(161 410)"><tspan letter-spacing=".7" style="font-kerning:normal">B</tspan><tspan letter-spacing=".7" style="font-kerning:normal">EST PRICE</tspan></text></g></g><g transform="translate(-119 -318)"><g  font-family="'Raleway','Raleway-Medium'" font-size="60" style="line-height:18px"><text dominant-baseline="text-before-edge" font-family="Helvetica, Arial, sans-serif" transform="translate(187 336)"><tspan letter-spacing="3" style="font-kerning:normal">$</tspan></text></g></g></g></svg>
          <figurecaption>see coupon</figurecaption>
        </figure>
      </section>
      <section class="info">
        <header>
          <h1>${ el.title }</h1>
          <span class="verified">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="84" height="16" viewBox="0 0 84 16"><g><g transform="translate(-789 -329)"><image width="84" height="16" transform="translate(789 329)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAQCAYAAACIoli7AAAEV0lEQVRYR+2XX2hbVRzHv7+bpMromrWw1cWKslasKPvXMvBhxUmTm/6Z6xwtc+KTkCIUH0S2vrkHBfsiiqC02IkgYxpd77LV3LTZYOIfHKtua0GHNj7opFWxy2wVcpP7k5PkLjc3N3dNNwaF3pfknvM75/zO5/x+v++5hNt4DsQCzRmS3gOjDcAiAaPu5PrBcF84dRvTruqhtFLvn1blJonwJUD1ljneUWT1pZXOu9rHrQjoM593NOgu/gZAgw2AJUVWq1c7mJX6XzHQ/bHAJob0NYDGMoumFFm9Z6UOrfZxN4EyQ/wnIujlNtWrynUaSecBfrz8xvljRY4dtPbvUzuOEPEbzDR4KhgdMvp7Yh0hgIeJeGgsEBvsiQX/BlBrHa9prjqPR9sCSBctfQlA71PkiSnR3hMLfgKgV9iPd48vGO+l/uqtuTbporF2fnyl68eJMDIWUMNiPPHvvnUZaeltBp4DUAXCJc4gVOVLfmd2oney3avp7gkAu8rBJOCKW0q3hf3xpJ1NDhYlFDma30wWwCSAdpfL1fhZ+3giD3SBiLMOGk8OdqAlDzROxFmAzBQSv5rmajQDtAIV0MzzpVLuIeOAbIBWun4tQP2KHB2h9Jx3mIEXLAD+FYftuS95TrTvPb13nbtKO8PAHoeUvOrJ0O5wZ/TPcjY9seAwgBCgt4qI6jrTVevxZGYBTCmy6i9ESDH0QjTngJoBGJFvbKhchBqAzb4ZB1QKdPnrH4h3bclkMiJrFhRZbSRtzrsI4F4bCBoRHXr2vH9c8/4zBqDTAeYvUobaTnZGf3OwwT5VbieiSSPtjXQ3YJhSrihCmDksDsAOwHKBmiPUaT67DHGyz/ucDRSRZQLoEgBbEcmwpHec7T/h3Xjp+XKgGLjGzE9GgrGfnWAWoiwoIhLiNPPp3qLIap2pv6SGFQ7ANuV7Rc29VcqbfbPOd6sa6mQv5t0/IQttOMLMfkrN13xATCXAhEZ1nRyavjD36PYH7v/2ctNDZ7eVAGP8RaTvGZMnZpYDU9gUxIn9RCQEJKzIan8xUOeUs6y1QIR+QxTudsqXRCj/sbE6raciQPZr5+Zz8PTRy/FfW3YaDZvrZ75vborsMJncAPSnDHVdLtB8zZkFaArgFnGqp4KxeCVAjYgyIsNSMmxV/q7VULERofRpafE4QN3i/dhM54+Hv3jxMSuk5ocjVzdvmnkEwH86kT8SiH61XJDFYpBTdgAJkfqWPpHyjiprAM2LWvYaZcxzZyLUeX0A1ltGLRH6RJaY76FubW7DMSI+tOuj4enEDd92K6z11fNTrdtGtzJzpzmqKoVqiJH1TmoSJcd7qL3KY0SUjjsEtJJ7cPE9tLhYg9LzG9564vi7u3+63mBO76xZTc21Czu2fvh6JKCKErH22BCw/fR8OXz41dHp7qNF9gz21V8J/TAw8P4ayfIEyn7L73zzxEDiuu8VBh4EMAsdg8nX2j5dg+lM4H/YSwzIpax2EQAAAABJRU5ErkJggg=="/></g></g></svg>
          </span>
        </header>
        <section class="info-content">
          <p>${ el.content }</p>
        </section>
        <footer>
          <span class="uses">${ el.uses}</span>
          <span class="terms">${ el.terms }</span>
          <span class="expiration">${ el.expiringText }</span>
        </footer>
      </section>
    </article>`
    all.innerHTML += article
  })
}
// remove active classes from coupons filter
function removeFilterActiveClasses(e) {
  expiringButton.classList.remove('active')
  verifiedButton.classList.remove('active')
  codeButton.classList.remove('active')
  allButton.classList.remove('active')
  if (e.target.classList.contains('filter')) {
    e.target.classList.add('active')
  } else if (e.target.parentNode.classList.contains('filter')) {
    e.target.parentNode.classList.add('active')
  }
}
// console.log(all)
// all.innerHTML = article
listingCoupons(couponsData)