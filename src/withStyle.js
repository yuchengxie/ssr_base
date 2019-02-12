import React,{Component} from 'react'

export default (DecoreatedComponent,styles)=>{
    return class NewComponent extends Component{
        componentWillMount(){
            if (this.props.staticContext){
                this.props.staticContext.css.push(styles._getCss())
            }
        }
        render(){
            return <DecoreatedComponent {...this.props}/>
        }
    }
}
