// Parse response JSON

const jsonData = pm.response.json();//global variable
// 1) Assert status is 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2) Assert Content-Type header indicates JSON
pm.test("Content-Type header indicates JSON", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

// 3) Assert response body is valid JSON and contains a 'recipes' array with length between 1 and 10 inclusive
pm.test("Response contains 'recipes' array with length between 1 and 10", function () {
    pm.expect(jsonData).to.be.an("object");
    pm.expect(jsonData).to.have.property("recipes");
    pm.expect(jsonData.recipes).to.be.an("array");
    pm.expect(jsonData.recipes.length).to.be.at.least(1, "recipes array should have at least 1 item");
    pm.expect(jsonData.recipes.length).to.be.at.most(10, "recipes array should have at most 10 items");
});

// 4) For every recipe in the array assert: id is a number, name is a non-empty string, image is a non-empty string and a valid URL
const urlRegex = /^https?:\/\/.+/;

jsonData.recipes.forEach((recipe, index) => {
    pm.test(`Recipe[${index}] has valid 'id' (number)`, function () {
        pm.expect(recipe).to.have.property("id");
        pm.expect(recipe.id).to.be.a("number", `Recipe[${index}].id should be a number`);
    });

    pm.test(`Recipe[${index}] has valid 'name' (non-empty string)`, function () {
        pm.expect(recipe).to.have.property("name");
        pm.expect(recipe.name).to.be.a("string", `Recipe[${index}].name should be a string`);
        pm.expect(recipe.name.length).to.be.greaterThan(0, `Recipe[${index}].name should not be empty`);
    });

    pm.test(`Recipe[${index}] has valid 'image' (non-empty string and valid URL)`, function () {
        pm.expect(recipe).to.have.property("image");
        pm.expect(recipe.image).to.be.a("string", `Recipe[${index}].image should be a string`);
        pm.expect(recipe.image.length).to.be.greaterThan(0, `Recipe[${index}].image should not be empty`);
        pm.expect(recipe.image).to.match(urlRegex, `Recipe[${index}].image should be a valid URL`);
    });
});

// 5) Assert pagination properties exist and are numbers: total, skip, limit; and that limit equals 10
pm.test("Pagination property 'total' exists and is a number", function () {
    pm.expect(jsonData).to.have.property("total");
    pm.expect(jsonData.total).to.be.a("number", "'total' should be a number");
});

pm.test("Pagination property 'skip' exists and is a number", function () {
    pm.expect(jsonData).to.have.property("skip");
    pm.expect(jsonData.skip).to.be.a("number", "'skip' should be a number");
});

pm.test("Pagination property 'limit' exists, is a number, and equals 10", function () {
    pm.expect(jsonData).to.have.property("limit");
    pm.expect(jsonData.limit).to.be.a("number", "'limit' should be a number");
    pm.expect(jsonData.limit).to.equal(10, "'limit' should equal 10");
});

// 6) Log the first recipe to console for inspection
if (jsonData.recipes && jsonData.recipes.length > 0) {
    console.log("First recipe for inspection:", jsonData.recipes[0]);
}
