import helper from '../../src/lib/helper'


describe("browser方法测试", function() {
    
    it("getWindowSize方法", function() {
        for () {
            expect(helper.getWindowSize().width).toBe();
        }
        console.log('aa', helper.getWindowSize())
        expect(helper.getWindowSize().width).toBeDefined();
        expect(helper.getWindowSize().height).toBeDefined();
        expect(helper.getWindowSize().width).toBeGreaterThanOrEqual(0);
        expect(helper.getWindowSize().height).toBeGreaterThanOrEqual(0);
    });
});