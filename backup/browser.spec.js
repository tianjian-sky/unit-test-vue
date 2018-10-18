import helper from '../../src/lib/helper'


describe("browser方法测试", function() {
    
    it("getWindowSize方法", function() {
        expect(helper.getWindowSize()).toBeDefined("width");
        expect(helper.getWindowSize()).toBeDefined("height");
        expect(helper.getWindowSize().width).toBeGreaterThan(-1);
        expect(helper.getWindowSize().height).toBeGreaterThan(-1);
    });
});