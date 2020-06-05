import React, { Component } from 'react';

export class footer extends Component {
    render() {
        return (
            <footer className="footer py-4 text-white-50" style={{
                position: "relative",bottom: "0",width:"100%"
              }}>
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2017 <a href="https://www.bootstrapdash.com/" target="_blank">BootstrapDash</a>. All rights reserved.</span>
                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i className="mdi mdi-heart text-danger" /></span>
                </div>
            </footer>
        );
    }
}

export default footer;
