class ArrayStats extends Array {
    average () {
        const averageValue = this.reduce((a, b) => a + b, 0) / this.length;
        Object.defineProperty(this, "avgVal", {
            value: averageValue,
            writable: false
        });
        return averageValue;
    }

    mapperVariance(val) {
        const variance = (val - this.avgVal) * (val - this.avgVal);
        this.currVal += variance;
        return variance;
    }

    stdev() {
        this.currVal = 0;
        this.map(this.mapperVariance, this);
        const variancevVal = this.currVal / (this.length - 1);
        const stdevValue = Math.sqrt(variancevVal);
        Object.defineProperty(this, "sdevVal", {
            value: stdevValue,
            writable: false
        });
        return stdevValue;
    }
}

let myArray = new ArrayStats(19, 30, 42, 54, 102);
console.log(myArray.average());
console.log(myArray.stdev());

module.exports = { ArrayStats };
