/**
 * Created by dandan.wu on 16/9/26.
 */
import React,{Component} from 'react'
import BaseModal from './BaseModal'

export default class LoadingModal extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <BaseModal style={{zIndex:1300}}>
                <div>loading........</div>
            </BaseModal>
        )
    }
}