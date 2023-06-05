import MainSlide from '../components/MainSlide';
import React from 'react';
import styled from 'styled-components';

const SLayout = styled.div`
    
`;

const SMainBanner = styled.div`
    height: calc(100vh - 100px);
`;

export default function Home() {
    return <SLayout>
        <SMainBanner style={{ overflow: "hidden" }}>
            <MainSlide />
        </SMainBanner>
    </SLayout>
}
