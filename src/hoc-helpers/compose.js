/*
* compose (
    *   withSwapiService(mapMethodsToProps),
    *   withData,
    *   withChildFunction(renderModelAndName)
*       ) (ItemList)
*
* functions - array
*
* array - We're read with helped Rest (...)
* */

/*
*  compose(a, b, c) (value)
*
* a (b (c (value) ) )
*/

/* How to work - reduceRight
*
* const arr = ['a', 'b', 'c']
*
* const res = arr.reduceRight((prevResult, value) => {
*       return prevResult + value
* })
*
*  Result #1: cba
*
* const res = arr.reduceRight((prevResult, value) => {
*       return prevResult + value
* }, XX)
*
*   Result #2: XXcba
*
* */


/* prevResult - It's a comp
*         f - It's one from ...functions
*
*     call f
*     transfer to component
*     func f created new component
*/

const compose = (...functions) => (comp) => {
    return functions.reduceRight(
        (prevResult, f) =>
            f(prevResult),comp
    )
}

export default compose
