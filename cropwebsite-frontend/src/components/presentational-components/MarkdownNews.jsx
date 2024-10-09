import 'github-markdown-css/github-markdown.css';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';

function MarkdownNews({news}){

    return (
        <div style={{ padding: '0 20% 0 20%' }}>
            <div className="markdown-body">
                <ReactMarkdown>{news}</ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownNews;