import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
// import axios from 'axios';
import AutoComplete from 'material-ui/AutoComplete';
import SearchIcon from 'material-ui/svg-icons/action/search';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import { updateQuery, getEvents } from '../../actions';
import { Container, SearchContainer, SearchIconWrapper, CloseIconWrapper } from './Searchbar_styles';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: this.props.query || '',
      suggestions: [],
    };
  }

  onRequestSearch = (chosenRequest) => {
    console.log(chosenRequest);
    this.props.updateQuery(chosenRequest, () => {
      this.props.getEvents(0, 20, chosenRequest, {});
    });
  }

  handleInput = (searchText) => {
    this.setState({ searchText });
  }

  handleCancel = () => {
    this.setState({ searchText: '' });
    this.props.updateQuery('', () => {
      this.props.getEvents(0, 20, '', {});
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && !this.props.searchText) {
      this.onRequestSearch(this.state.searchText);
    }
  }

  render() {
    const { searchText, suggestions } = this.state;
    const nonEmpty = searchText.length > 0;

    return (
      <Container>
        <SearchContainer>
          <AutoComplete
            searchText={searchText}
            onUpdateInput={this.handleInput}
            onNewRequest={this.onRequestSearch}
            onKeyPress={this.handleKeyPress}
            fullWidth
            openOnFocus
            underlineShow={false}
            // filter={AutoComplete.noFilter}
            filter={AutoComplete.fuzzyFilter}
            maxSearchResults={5}
            dataSource={suggestions}
            hintText="Wyszukaj wydarzenia"
          />
        </SearchContainer>
        <SearchIconWrapper nonEmpty={nonEmpty} onTouchTap={this.onRequestSearch}>
          <SearchIcon />
        </SearchIconWrapper>
        <CloseIconWrapper nonEmpty={nonEmpty} onTouchTap={() => this.handleCancel()}>
          <CloseIcon />
        </CloseIconWrapper>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.query,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateQuery, getEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
