import React from 'react'
import PropTypes from 'prop-types'
import './drop-file-input.css'
import InputImport from './input_import/InputImport'

const DropFileInput = props => {
    return (
        <main class='main'>
            <div class="container">
                <section class="main__drop-file-input drop-file-input">
                    <div class="drop-file-input__title">
                        Загрузите фотографии для разметки дорожной ситуации
                    </div>
                    <InputImport />
                </section>
            </div>
        </main>
    )
}

DropFileInput.propTypes = {}

export default DropFileInput