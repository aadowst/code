/*
This is a small piece of a real world on-the-job problem.

The client your contracting company is building a site for is tired of
having to do duplicate work and has asked you to automate a task.

Whenever they create a new product in the Dato Content Management System
that contains variants, they have to also go to their shopify admin panel
and create the product and variants there as well, however, shopify limits
the number of variants each product can have to 100, so they sometimes
have to create multiple products in shopify to fit all the variants.

Dato has a webhook that can execute your function onNewProduct event and give
you the payload containing the new product from Dato and it's variants.

Your function needs to create the minimum number of new products required to
fit all the variants so that you can send these new products to the shopify API
to automatically create them.

To simplify testing, the variant limit will be 2, but it should be flexible in
case it ever changes.

DO NOT mutate given params.
*/

const datoEntity1 = {
    /** Dato entity id. */
    id: 1,
    attributes: {
        title: 'backpack',
        sku: '3d0921',
        variants: [
            {
                /** Dato variant id. */
                id: 1,
                attributes: { name: 'cross-strap', price: 35, _v: 3 },
            },
            {
                id: 2,
                attributes: { name: 'travel-40L', price: 68, _v: 1 },
            },
            {
                id: 3,
                attributes: { name: 'gym-pack', price: 32, _v: 2 },
            },
            {
                id: 4,
                attributes: { name: 'camping', price: 36, _v: 4 },
            },
            {
                id: 5,
                attributes: { name: 'duffle', price: 45, _v: 3 },
            },
        ],
    },
};

// New products to be sent to shopify, variant limit of 2 for testing.
const expected1 = [
    {
        id: null,
        title: 'backpack',
        sku: '3d0921',
        variants: [
            {
                name: 'cross-strap',
                price: 35,
            },
            {
                name: 'travel-40L',
                price: 68,
            },
        ],
    },
    {
        id: null,
        title: 'backpack',
        sku: '3d0921',
        variants: [
            {
                name: 'gym-pack',
                price: 32,
            },
            {
                name: 'camping',
                price: 36,
            },
        ],
    },
    {
        id: null,
        title: 'backpack',
        sku: '3d0921',
        variants: [
            {
                name: 'duffle',
                price: 45,
            },
        ],
    },
];

const datoEntity2 = {
    id: 2,
    attributes: {
        title: 'helmet',
        sku: '5c3449',
        variants: [
            {
                id: 1,
                attributes: { name: 'skateboard', price: 42, _v: 2 },
            },
        ],
    },
};

const expected2 = {
    title: 'helmet',
    sku: '5c3449',
    variants: [{ name: 'skateboard', price: 42 }],
};

/**
 * Splits variants from a new product added to Dato into new duplicate shopify
 * products based on how many are needed to fit all the variants.
 * Also removes some Dato data that shouldn't be sent to shopify without
 * mutating the given data.
 * @param {*} datoEntity
 * @param {number} variantLimit The max number of variants that the shopify
 *    api will allow.
 */
function splitVariantsIntoNewProducts(datoEntity, variantLimit = 2) {
    let resultArray = []
    let variantLength = datoEntity.attributes.variants.length
    let objectCount = 0
    let newObj = {
        id: null,
        title: datoEntity.attributes.title,
        sku: datoEntity.attributes.sku,
        variants: []
    }
    for (let i = 0; i < variantLength; i++) {
        if (newObj.variants.length == variantLimit) {
            resultArray.push(newObj)
            newObj = {
                id: null,
                title: datoEntity.attributes.title,
                sku: datoEntity.attributes.sku,
                variants: []
            }
            objectCount = 0
        }
        let temp = { name: datoEntity.attributes.variants[i].attributes.name, price: datoEntity.attributes.variants[i].attributes.price }
        newObj.variants.push(temp)
        objectCount++
    }
    resultArray.push(newObj)
    console.log(resultArray[0].variants[1])
    return resultArray
}