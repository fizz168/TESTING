function createcar(brand, model, year){
    return {
        brand : brand,
        model : model,
        year : year,
        getInfo : function(){
            return `${this.brand} &{this.model} &{this.year}`;
        }
    };
}
const mycar = createcar("Mclaren", "Senna", "2008");
console.log(mycar.getInfo());

