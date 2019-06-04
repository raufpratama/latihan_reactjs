import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Reusable/Loading';
import AlertDialog from './Reusable/AlertDialog';
import route_url from '../Data/url';
import { connect } from 'react-redux';
import deleteBook from '../Actions/deleteBook';

class Books extends Component {
    state = {
        isLoading:true,
        data:'',
    }

    handleClick = (id) => {
        this.props.delete_data(id);
        this.props.history.push('/books')
        console.log(this.props.todos)
    }

    componentDidMount = () => {
        if(this.props.todos.length <= 1) {
            fetch(`${route_url.url}`)
            .then(response=>response.json())
            .then(async response=>{
                const sepuluh_data = response.slice(0,10);
                this.props.add_data(sepuluh_data)
                this.setState({isLoading:false})
            })
            .catch(err=>console.log(`telah terjadi kesalahan ${err}`))
        } else {
            this.setState({isLoading:false})
        }
    }

    render() {
        const { isLoading } = this.state;
        const { todos } = this.props;
        if(isLoading) {
            return(
                <Loading/>
            )
        } else {
            return (
                <div>
                    {todos.map(datas=>(
                        <div className='card col-5'>
                            <Link to={'/'+datas.id}>
                                <h5 className='card-header'>Featured</h5>
                                <div className='card-body'>
                                    <h5 className='card-title'>{datas.title}</h5>
                                    <p className='card-text'>{datas.body}</p>
                                </div>
                            </Link>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Launch demo modal
                            </button>
                            <AlertDialog handleClick={this.handleClick} id={datas.id} title='Attention' body={'Apakah anda yakin ingin menghapus data ini ?'}/>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        todos:state.todos
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        add_data: (data)=> { dispatch({type:'ADD_TODOS',todo:data}) },
        delete_data:(data)=>{dispatch(deleteBook(data))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Books)
