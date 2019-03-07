import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components"
import resume from "../images/Resume.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const StyledResume = styled.div`
display: flex;
margin: 30px auto;
justify-items: center;
align-items: center;
`

const StyledPage = styled.div`
margin: 0 auto;
`

class Resume extends Component {
    render() {
        return (
            <StyledResume>
                <Document
                    file={resume}
                >
                    <StyledPage><Page
                        pageNumber={1}
                    />
                    </StyledPage>
                </Document>
            </StyledResume>
        );
    }
}

export default Resume;