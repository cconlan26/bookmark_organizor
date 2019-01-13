

function isRecipe(url) {
    var url = 'www.seriouseats.com/recipes/2016/02/hungarian-goulash-beef-paprika-stew-recipe.html';
    var hostname = (new URL(url)).hostname;

    assert(hostname === 'www.seriouseats.com');

    // Example serious eats url
    // www.seriouseats.com/recipes/2016/02/hungarian-goulash-beef-paprika-stew-recipe.html

}