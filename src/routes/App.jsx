import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from '@containers/layout.jsx';
import Home from '@pages/index.jsx';
import NotFound from '@pages/NotFound.jsx';
import MainPage from '../components/MainPage';



import '@styles/global.scss';

const App = () => {
    
    return ( 
        
            <BrowserRouter>
                <Layout>
                    <Routes>
                       
                       <Route path="/MainPage" element={<MainPage />} /> 
                       <Route path="/" element={<Home />} />
                       <Route path="*" element={<NotFound />} />       
                    </Routes> 
                </Layout>       
            </BrowserRouter>
          
    );
};

export default App;



