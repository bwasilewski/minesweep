// Test import of a JavaScript module
import { example } from '@/js/example'
import { AppView } from '@/js/minesweep'

// Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

const appView = AppView()

console.log('App: ', AppView);

// Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)
app.append(heading, appView)
