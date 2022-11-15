import {FlatList} from 'react-native';
import React from 'react';
import {CLEAN_HISTORY, selectHistory} from '@src/slice/history.reducer';
import {connect} from 'react-redux';
import HistoryRow from './historyRow.component';
import {
  containerHeight,
  headerHeight,
} from '@src/styles/cards/_cardEmpty.styles';

const HistoryList = ({history}) => {
  return (
    <FlatList
      nestedScrollEnabled
      scrollEnabled
      style={{height: containerHeight - headerHeight}}
      data={history}
      renderItem={({item, index}) => <HistoryRow {...item} key={index} />}
    />
  );
};

const mapStateToProps = state => ({
  history: selectHistory(state),
});

const mapDispatchToProps = dispatch => ({
  clean: () => dispatch(CLEAN_HISTORY()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryList);
