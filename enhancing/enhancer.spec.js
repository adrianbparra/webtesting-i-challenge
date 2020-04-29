const enhancer = require('./enhancer.js');
// test away!


describe("enchancing items", () => {
    

    describe("repairs", () =>{

        it("repairs tool", () =>{
            const item = {name: "sword", durability:16, enhancement: 5}

            const repair = enhancer.repair(item)

            const repairred = {name: "sword", durability:100, enhancement: 5}


            expect(repair).toEqual(repairred)
        })
    })

    describe("success", () => {

        it("expects to accepts item enhancement to increase by 1", () =>{

            const item = {name: "sword", durability:16, enhancement: 8}

            const enhance = enhancer.succeed(item)

            const enhanced = {name: "sword", durability: 16, enhancement: 9}

            expect(enhance).toEqual(enhanced);

        })

        it("expects item enhancement to stay if enhancement is 20", ()=>{
            const item = {name: "sword", durability:16, enhancement: 20}
            
            const enhance = enhancer.succeed(item)

            expect(enhance).toEqual(item);
        })
    })

    describe("fail",() =>{
        
        it("if item enhacement is less than 15 durability is decreased by 5", () =>{
            const item = {name: "sword", durability:16, enhancement: 12}

            const actualResults = enhancer.fail(item);

            const expected = {name: "sword", durability:11, enhancement: 12}

            expect(actualResults).toEqual(expected)
        })

        it("item's enhancement is 15 or more, the durability of the item is decreased by 10",() =>{
            const item = {name: "sword", durability:25, enhancement: 20}

            const actualResults = enhancer.fail(item);

            expect(actualResults.durability).toEqual(15)
        })

        it("item's enhancement level is greater than 16, the enhancement level decreases by 1", ()=>{
            const item = {name: "sword", durability:25, enhancement: 20}

            const actualResults = enhancer.fail(item);

            expect(actualResults.enhancement).toEqual(19)
            expect(actualResults.durability).toEqual(15)
        })
    })

    describe("get", () =>{
        it("if enhancement is 0 name is not modified", () =>{

            const item = {name: "sword", durability:25, enhancement: 0}
            
            const actualResults = enhancer.get(item);

            expect(actualResults).toBe("sword")
        })

        it("if enchancement leveil is greater than 0, name is changed to [+enhanchement] name", () =>{

            const item = {name: "Sword", durability:25, enhancement: 14}

            const actualResults = enhancer.get(item);

            expect(actualResults).toBe("[+14] Sword")

        })
    })
})