import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './input-import.css'
import import_file_icon from './../../../assets/import-file.svg'


const InputImport = props => {
    const inputImportRef = useRef(null);

    const [importFileDescriptionVisible, setImportFileDescriptionVisible] = useState(true);

    const onFileDrop = (e) => {
        const newFile = e.target.files;
        if (newFile) {
            const updatedList = [...props.fileList, ...newFile];
            props.setFileList(updatedList);
            if (updatedList.length > 0)
                inputImportRef.current.classList.add('hide');
            else
                inputImportRef.current.classList.remove('hide');
            props.onFileChange(updatedList);
        }
    }

    const handleTransitionEnd = () => {
        if (props.fileList.length > 0)
            setImportFileDescriptionVisible(false);
        else
            setImportFileDescriptionVisible(true);
    };

    return (
        <div ref={inputImportRef} className={`drop-file-input__import-file import-file`}>
            <input id="fileInput" type="file" className="import-file__input" accept="image/*" onChange={onFileDrop} multiple />
            <img src={import_file_icon} alt="" className="import-file__img" />
            {importFileDescriptionVisible && <p id="importFileDesc" className="import-file__description" onTransitionEnd={handleTransitionEnd}>Выберите или перетащите файлы</p>}
        </div >
    );
}

InputImport.propTypes = {
    onFileChange: PropTypes.func,
    fileList: PropTypes.array,
    setFileList: PropTypes.func,
}

export default InputImport;