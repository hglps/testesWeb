class Movie{
    constructor(name, year, rentPrice, durationTime){
        this.name = name;
        this.year = year;
        this.rentPrice = rentPrice;
        this.durationTime = durationTime;
    }

    constructToString(){
        let name = this.name;
        let year = this.year;
        let durationTime = this.durationTime;
        let rentPrice = this.rentPrice;

        return "Name: " + name + "<br />Year: " + year + "<br />Duration Time: " + durationTime + "<br />Rent Price: $" + rentPrice + "<br />";
    }

    toString(){
        return this.constructToString();
    }

    getMovie(index){
        return this.toString();
    }

    



}