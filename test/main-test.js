'use strict';

describe('workshop', () => {

   it('all numbers are the same,all additions are the same', () => {
      let result=workshop('1234','1234');
    expect(result).toEqual('4A0B');
  });
    it('all numbers are the same,no additions are the same', () => {
        let result = workshop('1234', '4321');
        expect(result).toEqual('0A4B');
    });
    it('all numbers are the same,some additions are the same', () => {
        let result0 = workshop('1234', '4213');
        expect(result0).toEqual('1A3B');
        let result1 = workshop('1234', '4231');
        expect(result1).toEqual('2A2B');
    });
    it('some numbers are the same,some additions are the same', () => {
        let result0 = workshop('1234', '7236');
        expect(result0).toEqual('2A0B');
        let result1 = workshop('1234', '7246');
        expect(result1).toEqual('1A1B');
        let result2 = workshop('1234', '7241');
        expect(result2).toEqual('1A2B');
    });
    it('some numbers are the same,no additions are the same', () => {
        let result0 = workshop('1234', '7623');
        expect(result0).toEqual('0A2B');
        let result1 = workshop('1234', '2746');
        expect(result1).toEqual('0A2B');
        let result2 = workshop('1234', '2741');
        expect(result2).toEqual('0A3B');
    });
    it('no numbers are the same,no additions are the same', () => {
        let result0 = workshop('1234', '5678');
        expect(result0).toEqual('0A0B');

    });

    it('generate random numbers string',() =>{
      let result=generator();
      expect(parseInt(result).toString().length).toEqual(4);
      expect(isNaN(parseInt(result))).toEqual(false);

      for(let i=0;i<result.length;i++){
        expect(result.indexOf(result[i])).toEqual(i);
      }

    })
});
