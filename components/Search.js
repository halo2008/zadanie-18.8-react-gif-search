var Search = React.createClass({

  getInitialState() {
    return  {
      searchingText: '',
    }
  },

  handleChange: function(event) {
    var searchingText = event.target.value;
    this.setState({
        searchingText: searchingText
    });

    if (searchingText.lenght >2){
      this.props.onShearch(searchingText);
    }
  },

  handleKeyUp: function(event){
    if(event.keyCode === 13){
        this.props.onShearch(this.state.searchingText);
    }
  },

  render: function() {
    var styles = {
      fontSize: '1.5em',
      width: '90%',
      maxWidth: '350px'
    };

    return (
      <input
        type = 'text'
        onKeyUp = {this.handleKeyUp}
        onChange = {this.handleChange}
        placeholder = 'wpisz fraze'
        style = {styles}
        value = {this.state.searchTerm}
      />
    )
  }
});
