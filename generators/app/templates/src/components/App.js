'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';


var App = React.createClass({
    render: function() {
        return (
            <div>app111222</div>
        );
    }
});

var List = React.createClass({
    render: function() {
        return (
            '<div>这是列表页12222</div>'
        );
    }
});

var Detail = React.createClass({
    render: function() {
        return (
            <div>这是详情页</div>
        );
    }
});

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/list' component={List} />
        <Route path='/detail' component={Detail} />
    </Router>
), document.getElementById('app'));
