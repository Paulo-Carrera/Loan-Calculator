

describe("servers tests" , function(){
    beforeEach(function(){
        serverNameInput.value = 'Alice';
    });

    it("should add a new server to allServers when submitServerInfo" , function(){
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
    });

    it("should not add new servers with empty inputs" , function(){
        serverNameInput.value = '';
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(0);
    });

    it("should update #serverTable when updateServerTable is called" , function(){
        submitServerInfo();
        updateServerTable();

        let curTdList = document.querySelectorAll('#serverTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('Alice');
        expect(curTdList[1].innerText).toEqual('$0.00');
        expect(curTdList[2].innerText).toEqual('X');
    })

    afterEach(function(){
        serverId= 0;
        serverTbody.innerHTML = '';
        allServers = {};
    })
})