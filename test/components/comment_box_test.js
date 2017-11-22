import {renderComponent, expect} from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe('Comment Box Test', () => {

    let component; // undefined

    // Before Each - means that it is working before each test :
    beforeEach(() => {
        // Render Component :
        component = renderComponent(CommentBox);
    });

    // Tests :
    it('has a the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a text button', () => {
        expect(component.find('button')).to.exist;
    });


    describe('Entering Some Text', () => {
        beforeEach(() => {
            // We have already initial component.
            // So we can directly use our initial component.
            // And we will simulate 'change' event and add some text ('A New Comment')
            // to inside of textarea. (It is a fake event...)
            component.find('textarea').simulate('change','A New Comment');
        });

        it('shows text that is in the textarea', () => {
            expect(component.find('textarea')).to.have.value('A New Comment');
        });

        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});