const { ArrayStats } = require('../array_stat.js');


describe('Function Check', () => {
    // check if fuction is working
    describe('correctness', () => {
        it('should return avg and standard deviation of numbers', () => {
            const arr = new ArrayStats(10, 20, 22, 55, 100);
            expect(arr.average()).toBeCloseTo(41.4);
            expect(arr.stdev()).toBeCloseTo(36.87546609874918);
        });
    });
    //check if function handles 1 value
    describe('Handles single value', () => {
        it('should return single value as average and standard deviation', () => {
            const arr = new ArrayStats(5);
            expect(arr.average()).toBeCloseTo(0);
            expect(arr.stdev()).toBeCloseTo(0);
        });
    });
    //check if function handles zero value
    describe('Handles no value', () => {
        it('should return 0 or NaN', () => {
            const arr = new ArrayStats();
            expect(arr.average()).toBeNaN();
            expect(arr.stdev()).toBeCloseTo(-0);
        });
    });

    //check if you can write avgVal or sdevVal
    describe('Non-writable', () => {
        it('avgVal and sdeVal should be non-writable', () => {
            const arr = new ArrayStats(19, 30, 42, 54, 102);
            arr.average();
            expect(() => { arr.avgVal = 100; }).toThrowError(TypeError);//should throw exception
            expect(() => { arr.sdevVal = 100; }).toThrowError(TypeError);//should throw exception
        });
    });
});
