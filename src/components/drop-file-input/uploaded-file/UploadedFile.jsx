import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './uploaded-file.css'
import MenuFileItem from './menu-file-item/MenuFileItem'


const UploadedFile = props => {
    return (
        <div id="uploadedFile" class="drop-file-input__uploaded-file uploaded-file">
            <div class="uploaded-file__description">
                <p id="uploadedFileDescriptio" class="description">Загруженные файлы</p>
            </div>
            <ul id="menuFile" class="uploaded-file__menu-file menu-file">
                {
                    props.fileList.map((item, index) => (
                        <MenuFileItem
                            key={index}
                            file={item}
                            fileRemove={props.fileRemove}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

UploadedFile.propTypes = {
    fileList: PropTypes.array,
    fileRemove: PropTypes.func,
};

export default UploadedFile;