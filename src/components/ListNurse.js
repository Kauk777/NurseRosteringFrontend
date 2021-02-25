import React, { Component } from 'react'
import NurseService from '../services/NurseService';

class ListNurse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            nurses:[]
        }
        this.addNurse=this.addNurse.bind(this);
        this.viewNurse=this.viewNurse.bind(this);
        
    }
    addNurse(){
        this.props.history.push('/add-nurse/-1');
    }
    componentDidMount(){
        NurseService.getNurse().then((res)=>{
            this.setState({nurses:res.data});
        });
    }
    viewNurse(id){
        this.props.history.push(`/view-nurse/${id}`);
    }

    render() {
        return (
            <div>
               <h2 className="text-center">Nurse List</h2> 
               <div className="row">
                   <button className="btn btn-primary" onClick={this.addNurse}>Add Nurse</button>
               </div>
               <div className="row">
                   <table className="table table-striped table-bordered">
                       <thead>
                           <tr>
                               <th> Total Nurse</th>
                               <th> Morning Nurse</th>
                               <th> Evening Nurse</th>
                               <th> Night Nurse</th>
                               <th> Holiday Nurse</th>
                               <th> Action</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.nurses.map(
                                   nurse=>
                                   <tr key={nurse.id}>
                                       <td>{nurse.totalNurse}</td>
                                       <td>{nurse.morning}</td>
                                       <td>{nurse.evening}</td>
                                       <td>{nurse.night}</td>
                                       <td>{nurse.off}</td>
                                       <td>
                                       <button onClick={()=>this.viewNurse(nurse.id)} className="btn btn-info" >View</button>
                                           
                                       </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
               </div>
            </div>
        )
    }
}

export default ListNurse;