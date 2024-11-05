import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const inputSentence = "hello world from copilot";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Outputs: "Copilot from world hello"

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = data.map(person => person.name);
console.log(names); // Outputs: ["Alice", "Bob", "Charlie"]

const nestedData = [
    [
        { name: 'John', age: 22 },
        { name: 'Jane', age: 28 }
    ],
    [
        { name: 'Bob', age: 34 }
    ]
];

const extractedNames = nestedData.flatMap(innerArray => innerArray.map(person => person.name));
console.log(extractedNames); // Outputs: ['John', 'Jane', 'Bob']