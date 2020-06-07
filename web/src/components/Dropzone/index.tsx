import React, {useCallback, useState} from 'react';
import { useDropzone } from "react-dropzone";
import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
    onFileUploaded: (file: File) => void;
}

const DropZone: React.FC<Props> = ({onFileUploaded}) => {
    const [selectedFileurl, setSelectedFileurl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);
        setSelectedFileurl(fileUrl);
        onFileUploaded(file);
    }, [onFileUploaded]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    return (
        <div className="dropzone"  {...getRootProps()}>
            <input {...getInputProps()} accept='image/*' />
                { selectedFileurl ?
                    <img src={selectedFileurl} alt='Point thumbnail' />
                    : (
                        <p>
                        <FiUpload />
                        Arraste a imagem do estabelecimento para este espaço...
                        </p> 
                    )
                }
            }
        </div>
    )
}

export default DropZone