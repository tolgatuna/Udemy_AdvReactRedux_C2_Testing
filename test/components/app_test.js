import {renderComponent, expect} from "../test_helper";
import App from "../../src/components/app";

// Use 'describe' to group together similar tests
describe('App Component', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('shows the correct title', () => {
        // Use 'expect' to make an 'assertion' about a target
        expect(component).to.contain('Comment Page');
    });

    it('has a comment box', () => {
        expect(component.find('.comment-box')).to.exist;
    });

    it('has a comment list', () => {
        expect(component.find('.comment-list')).to.exist;
    });
});


