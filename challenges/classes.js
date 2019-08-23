// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(i){
        this.length = i.length;
        this.width = i.width;
        this.height = i.height;
    }

volume(){
    return this.length * this.width * this.height;
    }  
    
surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }    
}

const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker {
    constructor(i) {
      super({
        length: i,
        width: i,
        height: i
      })
      this.i = i;
    }
  }


const cube = new CubeMaker(10);
console.log(`If the cube has a ${cube.i} unit side it will also have a ${cube.volume()} cubic unit volume.`);
console.log(`A cube has a ${cube.i} unit side it will also have a ${cube.surfaceArea()} square unit surface area.`);  
