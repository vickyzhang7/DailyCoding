import React from 'react';

class AutocorrectTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { corrections } = this.props;


    const words = value.split(' ');
    const lastWord = words[words.length - 1];

    if (words.length > 1 && lastWord === '') {
      const correctedWords = words.slice(0, -1).map(word => corrections[word] || word);
      this.setState({
        text: correctedWords.join(' ') + ' ',
      });
    } else {
      this.setState({
        text: value,
      });
    }
  };

  render() {
    return (
      <div className="text-center">
        <textarea data-testid="textarea" rows={10} cols={80} className="card" 
        value={this.state.text}
        onChange={this.handleChange}/>
      </div>
    );
  }
}

export default AutocorrectTextarea;
