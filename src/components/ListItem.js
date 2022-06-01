import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardSection} from './common/index';
import * as actions from '../actions/index';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native'; //TouchableWithoutFeedback is used as we are just expanding our list accordion without showing any kind of feedback like popup alert or navigation

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const {expanded, library} = this.props;
    const {description} = library.item;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

//ownProps is same as this.props
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectionLibraryId === ownProps.library.item.id;
  return {
    expanded,
  };
};

export default connect(mapStateToProps, actions)(ListItem);
// export default connect(null, actions)(ListItem); //since we don't have matchStateToProps here we pass first argument as null
