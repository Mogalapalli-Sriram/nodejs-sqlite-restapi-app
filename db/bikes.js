const knexConnect = require("./knex");

function getAllBikes() {

    return knexConnect("bikes").select("*");
}

function createBike(bike) {
    return knexConnect("bikes").insert(bike);
}

function getBike(id) {
   return knexConnect("bikes").where("id",id).select();
}

function updateBike(id,bike) {
return knexConnect("bikes").where("id",id).update(bike);

}

function deleteBike(id) {
    return knexConnect("bikes").where("id",id).del();
}




module.exports = {
getAllBikes,
createBike,
getBike,
updateBike,
deleteBike
};





