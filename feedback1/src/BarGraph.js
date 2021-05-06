import React, { Component } from 'react';
import Plot from 'react-plotly.js'
import * as FirestoreService from './firebase';


class BarGraph extends Component{    

    render(){

        return (
            <Plot 
                data = {[
                    {
                        type: this.props.type,
                        x: FirestoreService.getTotalHoursSpentForClass(this.props.attribute)[1],
                        y: FirestoreService.getTotalHoursSpentForClass(this.props.attribute)[0],
                        values: FirestoreService.getTotalHoursSpentForClass(this.props.attribute)[0],
                        labels:  FirestoreService.getTotalHoursSpentForClass(this.props.attribute)[1],
                    },
                    {type: this.props.type},
                ]}
                layout={{fontsize: 12, width: 450, height: 500 ,
                    title: {
    text: this.props.title,
    font: {
      family: 'Lucida Handwriting',
      size: 22
    },
   },'textAlign': 'center',
      xaxis:{
        title: {
      text: this.props.xaxis,
   }
},      yaxis:{
        title: {
      text: this.props.yaxis,
   }
}
}

}
            />
        )
    }
    }

export default BarGraph;
