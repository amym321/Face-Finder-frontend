import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='lightest-blue'>
            <p className='f3'>
                {'Enter an image and the Face App will detect faces in your pictures.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button 
                        className='f4 w-30 grow link ph3 pv2 dib white b bg-light-purple'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;