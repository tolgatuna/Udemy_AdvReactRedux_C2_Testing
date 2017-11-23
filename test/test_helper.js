import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import jsdom from 'jsdom';      // Check : https://github.com/tmpvar/jsdom
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';


// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); // Fake Document
global.window   = global.document.defaultView;                              // Fake View
const $ = jquery(global.window);


// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props}/>
        </Provider>
    );
    const htmlInstance = ReactDOM.findDOMNode(componentInstance);    // Produces HTML

    return $(htmlInstance);
}


// Build helper for simulating events
$.fn.simulate = function (eventName, value) {
    if(value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

// Export Methods:
export {renderComponent, expect};


