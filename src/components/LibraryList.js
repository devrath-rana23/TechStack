import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }
  render() {
    const {libraries} = this.props;
    return (
      <FlatList
        data={libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}

//takes Global state for defined in our reducers as parameter and extract it's some properties and assign them as props to be used by our component
const mapStateToProps = state => {
  const {libraries} = state;
  return {
    libraries,
    selectionLibraryId: state.selectionLibraryId,
  };
};

export default connect(mapStateToProps)(LibraryList); //here connect call returns a function which is called with LibraryList as it's parameter. Here using connect() helper to get access to app state in this component
