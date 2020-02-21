const db = require('../data/dbConfig.js');

const Meeseeks = require('../meeseeks/meeseeksModel.js');

describe('meeseeks model', () => {
    describe('insert', ()  => {
        it('should insert meeseek into the table', async () => {
            await Meeseeks.add({name: "Mr Meeseek", quote: "I'm Mr Meeseek. Look at me!"})

            const meeseeks = await db('meeseeks');
            expect(meeseeks).toHaveLength(1)
        })
        it('should return the inserted meeseek', async () => {
            const meeseek = await Meeseeks.add({name: "Mr Meeseek", quote: "I'm Mr Meeseek. Look at me!"})
            expect(meeseek.name).toBe('Mr Meeseek')
            expect(meeseek.quote).toBe("I'm Mr Meeseek. Look at me!")
        })
    })  
    describe("remove", ()  => {
        it('should remove meeseek from the table', async () => {
            await Meeseeks.add({name: "Mr Meeseek", quote: "I'm Mr Meeseek. Look at me!"})

            let meeseeks = await db('meeseeks');
            expect(meeseeks).toHaveLength(1)
            await Meeseeks.remove(1)
            meeseeks = await db('meeseeks');
            expect(meeseeks).toHaveLength(0);
        })
    })  
})

beforeEach(async () => {
    await db('meeseeks').truncate();
})


