describe("test for correct math", function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it("should sum total tip of all payments in sumPaymentTotal" , function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 40 ;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
        });

    
    it("should sum total bill amount of all payments" , function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200 ;
        tipAmtInput.value = 40 ;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
    })

    it("should sum tip percentage" , function(){
        expect(sumPaymentTotal('tipPercent')).toBe(20);

        billAmtInput.value = 100 ;
        tipAmtInput.value = 20 ;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it("should sum tip percentage of a single tip" , function(){
        expect(calculateTipPercent(100 , 25)).toEqual(25)
        expect(calculateTipPercent(120 , 12)).toEqual(10)
    });

    it("should create a new TD from value and append to TR on appendTd" , function(){
        let newTr = document.createElement('tr');

        appendTd(newTr , 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it("should generate delete TD and append to TR on appendDeleteBtn" , function(){
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toBe('X');
    });
})




afterEach(function(){               //  reset after each test
    billAmtInput.value = '' ;
    tipAmtInput.value = '' ;
    paymentTbody.innerHTML = '' ;
    summaryTds[0].innerHTML = '' ;
    summaryTds[1].innerHTML = '' ;
    summaryTds[2].innerHTML = '' ;
    serverTbody.innerHTML = '' ;
    allPayments = {};
    paymentId = 0;
})