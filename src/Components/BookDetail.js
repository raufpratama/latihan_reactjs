import React, { Component } from 'react'
import Loading from './Reusable/Loading';
import route_header from '../Data/url';

export default class BookDetail extends Component {
    state = {
        data_detail:'',
        isLoading:'',
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        fetch(`${route_header.url}/${id}`)
        .then(response=>response.json())
        .then(response=>this.setState({data_detail:response}))
        .catch(err=>console.log(`${err} terjadi kesalahan`))
    }

    render() {
        const { data_detail, isLoading } = this.state;
        if(isLoading) {
            return(
                <Loading/>
            )
        } else {
            return (
                <div>
                    <h5>{data_detail.title}</h5>
                    <p>{data_detail.body}</p>
                </div>
            )
        }
    }
}
