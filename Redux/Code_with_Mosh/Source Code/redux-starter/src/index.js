const pipe = require("lodash/fp/pipe")

let input = "    JavaScript    "

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()

// hard to read way of calling above functions on the input
const result = wrapInDiv(toLowerCase(trim(input)))

// using lodash
const transform = pipe(trim, toLowerCase, wrapInDiv)

// using a generalized wrap in function (so strings could be wrapped in spans, p tags, etc)
const wrap = (element, str) => `<${element}> ${str} </${element}>`

// the functions passed into pipe can only take one argument, so wrap needs to be Curryed

const wrapCurryed = element => str => `<${element}> ${str} </${element}>`
const transformToDiv = pipe(trim, toLowerCase, wrapCurryed("div"))



const wrapWithElement = element => str => `<${element}> ${str} </${element}>`
// console.log(wrapWithElement("element")("text"))

// const transformToElement = pipe(trim, toLowerCase, wrapWithElement)
// console.log(transformToElement("span")(input))
