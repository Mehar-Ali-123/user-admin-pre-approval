import React from 'react'

function InformationBar(props) {
    return (
        <div className="m-3">
            <div className="d-flex justify-content-between mt-4 px-3 py-3 bkg-dark radius-bar">
                <div>
                    <h5 className="txt-Primary txt-24   my-0">
                      <i>{props.headingBar}</i>
                    </h5>
                </div>
                <div>
                    {props.imgBar}
                    <span className="txt-Secondary txt-18 ps-2 " onClick={props.clickFunction}>
                       {props.contentBar}
                    </span>
                </div>

            </div>
        </div>
    )
}

export default InformationBar