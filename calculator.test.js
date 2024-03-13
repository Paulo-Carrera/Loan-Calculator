beforeAll(()=>{
    console.log('Calculator Tests')
})

it('should calculate the monthly rate', ()=>{
    const values = {
        amount : 10000 , 
        years : 8 ,
        rate : 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('130.44');
});

it('should handle high interest rates' , function(){
    const values = {
        amount : 1000,
        years : 40 ,
        rate : 99
    };
    expect(calculateMonthlyPayment(values)).toBeCloseTo(82.50);
});

afterAll(()=>{
    
    console.log('Calculator Tests Complete.')
})