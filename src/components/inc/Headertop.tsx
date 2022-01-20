import { Component } from "react";

class Headertop extends Component{
    render(){
        return(
            <div>
                <div className="container shadow-lg p-2 mt-3 mb-2 rounded">
                    <div className="shadow-sm p-3 rounded">
                        <div className="row">

                            <div className="col-md-1">
                                <div style={{width:'8rem'}}>
                                    <img src={require('../images/thanos.png')} className="card-img-top" alt="img" />
                                </div>
                            </div>

                            <div className="col-md-11">
                                <div style={{width:'18rem'}}>
                                    <h4>วิทยาลัยเทคนิคตราด</h4>
                                    <div className="undeline mx-auto my-2"></div>
                                    <h4>Trat Technical College</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Headertop;