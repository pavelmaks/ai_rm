import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './drop-file-input.css'
import InputImport from './input_import/InputImport'
import UploadedFile from './uploaded-file/UploadedFile'

const DropFileInput = props => {
    const [fileList, setFileList] = useState([]);

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        onFileChange(updatedList);
    }

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <main class='main'>
            <div class="container">
                <section class="main__drop-file-input drop-file-input">
                    <div class="drop-file-input__title">
                        Загрузите фотографии для разметки дорожной ситуации
                    </div>
                    <InputImport
                        onFileChange={(files) => onFileChange(files)}
                        fileList={fileList}
                        setFileList={setFileList}
                    />
                    <UploadedFile
                        fileList={fileList}
                        fileRemove={fileRemove}
                    />
                </section>
            </div>
        </main>
    )
}

DropFileInput.propTypes = {}

export default DropFileInput