module.exports = (eleventyConfig) => {
    const handlebars = require('handlebars')
    eleventyConfig.setLibrary('hbs', handlebars)

    eleventyConfig.addPassthroughCopy('css')

    eleventyConfig.addPassthroughCopy("img");

    return {
        dir: {
            input: './',
            includes: 'includes',
            output: "public"
        },
        passthroughFileCopy: true
    }
}
