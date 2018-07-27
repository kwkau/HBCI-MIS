import * as React from "react";
// import Snackbar from "material-ui/Snackbar";
// import RaisedButton from "material-ui/RaisedButton";
// import { AlertWarning, ActionInfo, AlertError, ActionCheckCircle } from "material-ui/svg-icons";
// import { NotifyTypes } from "../Enums/Enums";

// interface IGrowlProps {
//     type: NotifyTypes,
//     message: string,
//     open: boolean;
//     duration?: number;
//     close: ()=>void;
// }



// export class Notify extends React.Component<IGrowlProps, any> {
    
//     //this.props.message ActionCheckCircle

//     render() {
//         return (
//             <Snackbar
//                 open={this.props.open}
//                 message={
//                     this.props.type === NotifyTypes.Success ? <span><ActionCheckCircle color="#fff" /> {this.props.message}</span> :
//                         this.props.type === NotifyTypes.Error ? <span><AlertError color="#fff"/> {this.props.message}</span> :
//                             this.props.type === NotifyTypes.Warning ? <span><AlertWarning color="#fff" /> {this.props.message}</span> :
//                                 this.props.type === NotifyTypes.Info ? <span><ActionInfo color="#fff" /> {this.props.message}</span> : <span>{this.props.message}</span>
                    
//                 } 
                
//                 bodyStyle = {
//                     this.props.type === NotifyTypes.Success ? { background: "rgba(48,87,2,.9)" } :
//                         this.props.type === NotifyTypes.Error ? { background: "rgba(164,4,24,.9)" } :
//                             this.props.type === NotifyTypes.Warning ? { background: "rgba(185,163,32,.9)" } :
//                                 this.props.type === NotifyTypes.Info ? { background: "rgba(7,102,196,.9)" } : {}
//                 }
//                 autoHideDuration={this.props.duration || 4000} 
//                 onRequestClose={this.props.close}
//             />
//         );
//     }
// }

// export class NotifyUndo extends React.Component<IGrowlProps, any> {
//     timer: any;
//     constructor(props: IGrowlProps) {
//         super(props);
//         this.state = {
//             message: "Event 1 added to your calendar",
//             open: false,
//         };

//         this.timer = undefined;
//     }

//     componentWillUnMount() {
//         clearTimeout(this.timer);
//     }

//     handleTouchTap = () => {
//         this.setState({
//             open: true,
//         });

//         this.timer = setTimeout(() => {
//             this.setState({
//                 message: `Event ${Math.round(Math.random() * 100)} added to your calendar`,
//             });
//         }, 1500);
//     };

//     handleRequestClose = () => {
//         this.setState({
//             open: false,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <RaisedButton
//                     onClick={this.handleTouchTap}
//                     label="Add to my calendar two times"
//                 />
//                 <Snackbar
//                     open={this.state.open}
//                     message={this.state.message}
//                     action="undo"
//                     bodyStyle={
//                         this.props.type === NotifyTypes.Success ? { background: "green" } :
//                             this.props.type === NotifyTypes.Error ? { background: "red" } :
//                                 this.props.type === NotifyTypes.Warning ? { background: "yellow" } :
//                                     this.props.type === NotifyTypes.Info?{background:"blue"}: {}
//                     }
//                     autoHideDuration={3000}
//                     onRequestClose={this.handleRequestClose}
//                 />
//             </div>
//         );
//     }
// }