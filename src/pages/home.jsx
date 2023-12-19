import { useContext, useState } from 'react';

import { Box, styled } from '@mui/material';
// import { makeStyles } from "@mui/styles";

import { DataContext } from '../context/dataProvider';
import { checkParams } from '../utils/common';
import { getData } from '../service/api';

//components
import Form from "../components/form";
import SelectTab from '../components/selectTab';
import SnackBar from '../components/snackBar';
import Header from '../components/header';
import Response from '../components/response';
import ErrorScreen from '../components/error';

const Container = styled(Box)`
    @media (max-width: 900px) {
        width: 80%;
    };
    @media (max-width: 600px) {
        width: 99%;
    };
    @media (max-width: 325px) {
        padding: 0px 5px;
    };
    width: 60%;
    margin: 20px auto;
    padding: 0px 20px;
`

const Home = () => {
    
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')
    const [errorResponse, setErrorResponse] = useState(false);
    const [apiResponse, setApiResponse] = useState({})

    const { formData, jsonText, paramData, headerData } = useContext(DataContext);
    

    const onSendClick = async () => {
        if(!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
            setError(true);
            return false;
        }

        let response = await getData(formData, jsonText, paramData, headerData);
        
        if (response === 'error') {
            setErrorResponse(true);
            return;
        }
        setApiResponse(JSON.stringify(response.data, null, 2))
    }

    return (
        <>
            <Header />
            <Container>
                <Form onSendClick={onSendClick} />
                <SelectTab />
                { errorResponse ? <ErrorScreen /> : <Response data={apiResponse} /> }
            </Container>
            { error && <SnackBar errorMsg={errorMsg} error={error} setError={setError} /> }
        </>
    )
}

export default Home;