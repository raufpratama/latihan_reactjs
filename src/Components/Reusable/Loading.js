import React from 'react'
const url = 'https://i0.wp.com/codemyui.com/wp-content/uploads/2017/07/fidget-spinner-loading.gif?zoom=2&fit=880%2C440&ssl=1';

const Loading = () => {
    return (
        <div className='container'>
            <div className='align-items-center'>
                <img src={url} width='500' height='300'></img>
            </div>
        </div>
    )
}

export default Loading
