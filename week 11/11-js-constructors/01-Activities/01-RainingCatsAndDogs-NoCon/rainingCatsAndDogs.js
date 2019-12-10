function Pet(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
  };


dog = new Pet(true, "woof!");
cat = new Pet(false, "meow!");

dog.noise();
cat.noise();