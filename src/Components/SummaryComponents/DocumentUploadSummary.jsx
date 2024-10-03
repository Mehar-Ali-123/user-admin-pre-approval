import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';

function DocumentUploadSummary() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadOptionsType, setUploadOptionsType] = useState(null);

    const options = [
        { value: 'application_or_id', label: 'Application or Id' },
        { value: 'credit', label: 'Credit' },
        { value: 'income', label: 'Income' },
        { value: 'taxes', label: 'Taxes' },
        { value: 'w2_or_1099', label: 'W2 or 1099' },
        { value: 'paystub_or_ytd_income', label: 'Paystub or Ytd income' },
        { value: 'assets', label: 'Assets' },
        { value: 'mortgage_statement_and_insurance', label: 'Mortgage Statement and Insurance' },
        { value: 'property', label: 'Property' },
        { value: 'title', label: 'Title' },
        { value: 'appraisal', label: 'Appraisal' },
        { value: 'purchase_contract', label: 'Purchase contract' },
        { value: 'disclosure', label: 'Disclosure' },
        { value: 'closing_documents', label: 'Closing documents' },
        { value: 'underwriting_conditions', label: 'Underwriting conditions' },
    ];

    const handleFileInputChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        setSelectedFile(file);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            console.log('No file selected for upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('YOUR_UPLOAD_API_ENDPOINT', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200 || response.status === 201) {
                console.log('Upload successful');
                alert('Upload successful');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Upload failed');
        }
    };
    return (

        <>
            <div className="px-4 ">
                <div className="row d-flex flex-wrap ">
                    <div className="col-md-12 px-1 mb-4">
                        <div className='border-gray radius-card py-3 px-3 w-100'>
                            UPLOAD MESSAGE will be shown here
                        </div>
                    </div>
                    <div className="col-md-6 px-1 d-flex justify-content-center flex-column">
                        <label htmlFor="username" className='txt-16'>Select type of document</label>
                        <div className="py-2 radius-card border-gray">
                            <span className="px-2">
                                {/* <img src="/assets/icons/profile.png" alt="Custom Icon" /> */}
                                {/* <InputText className="ms-2 ps-0 py-2" placeholder="Select" /> */}
                                <Dropdown
                                    value={uploadOptionsType}
                                    onChange={(e) => setUploadOptionsType(e.target.value)}
                                    optionLabel="label"
                                    options={options} 
                                    className=" drop-down ms-2  ps-0   "
                                    placeholder='select'
                                    />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 px-1 py-0 pt-4 pb-1 d-flex justify-content-center flex-column">
                        <label htmlFor='fileInput' className='upload-from-here txt-16  p-0 d-flex m-0 justify-content-center align-items-center text-decoration-none '>
                            <p className='my-0 py-2 '>
                                <img height='20px' width='16px' src='/assets/icons/paperclip.png' alt='icon-plus' />
                                <span className='txt-14 w-100 ps-1 text-primary fw-semibold position-relative'>Add another </span>{' '}
                                <span className='text-muted txt-14 ps-2'> or click here to upload</span>
                                <p className='txt-sharp-red ps-3 txt-12 my-0 py-0'>*Supported formats: PDF</p>
                            </p>
                            <input
                                type='file'
                                id='fileInput'
                                className='d-none'
                                onChange={handleFileInputChange}
                                accept='.pdf'
                            />
                        </label>
                    </div>
                </div>
                <div className="container p-2">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 col-sm-12">
                            <div className=''>
                                {selectedFile && (
                                    <div className='d-flex justify-content-between  align-items-center w-100 mt-3'>
                                        <p
                                            className='txt-14 py-0 my-0 d-flex justify-content-start  gap-2 me-5'
                                            onClick={openModal}
                                            style={{ cursor: 'pointer' }}>
                                            <img src='/assets/icons/pdfLogo.png' alt='' /> {selectedFile.name}
                                        </p>
                                        <div className='d-flex flex-end'>
                                            <button className='d-flex px-0 bg-transparent align-items-center' onClick={handleUpload}>
                                                <img src='/assets/icons/cloud-upload.png' alt='' />
                                                <span className='txt-sky px-1 text-primary'>Upload</span>
                                            </button>
                                            <button className='d-flex align-items-center px-0 ms-3 bg-transparent' onClick={() => setSelectedFile(null)}>
                                                <img src='/assets/icons/x.png' alt='' />
                                                <span className='txt-sharp-red'>Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DocumentUploadSummary;