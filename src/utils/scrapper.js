const puppeteer = require('puppeteer')
const fs = require('fs')

const productosArray = { results: [] }

const scrapper = async (url) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.waitForSelector('[aria-label="Accept"]')

  await page.$eval('[aria-label="Accept"]', (el) => {
    el.click()
  })
  repeat(page, browser)
}

const repeat = async (page, browser) => {
  const arrayDivs = await page.$$('li.grid__item')

  for (const producto of arrayDivs) {
    let nombre = await producto.$eval('.full-unstyled-link', (el) =>
      el.textContent.trim()
    )
    let precio = await producto.$eval('.price-item.price-item--regular', (el) =>
      el.textContent.replace('€', '').replace(' EUR', '').trim()
    )

    let img = await producto.$eval('img', (el) => el.src)

    const prenda = {
      nombre,
      precio,
      img
    }
    productosArray.results.push(prenda)
  }

  try {
    await page.$eval('[aria-label="Página siguiente"]', (el) => el.click())
    await page.waitForNavigation()
    repeat(page, browser)
  } catch (error) {
    write(productosArray)
    await browser.close()
  }
}

const write = async (productosArray) => {
  fs.writeFile('productos.json', JSON.stringify(productosArray), () => {
    console.log('Archivo escrito')
  })
}

module.exports = { scrapper }
