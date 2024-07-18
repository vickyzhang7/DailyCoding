import React, {useState} from 'react';

const AutocorrectTextarea = (props) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const {corrections} = props;
        const {value} = event.target;
        if (value.length && value[value.length - 1] === ' ') {
            const words = value.split(' ');
            words.pop();
            const lastWord = words.pop();
            setText([...words, (corrections[lastWord] || lastWord)].join(' ') + ' ');
        } else {
            setText(value);
        }
    }


    return (
        <div className="text-center">
            <textarea data-testid="textarea" rows={10} cols={80} className="card" value={text}/>
        </div>
    );

}


export default AutocorrectTextarea;