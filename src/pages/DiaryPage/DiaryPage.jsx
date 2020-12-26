import React, { Component } from 'react';
import DiaryProductsList from '../../components/DiaryProductsList';
import RightSideBar from '../../components/RightSideBar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import SetDate from '../../components/SetDate/SetDate';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/user/userOperations';
import userActions from '../../redux/user/userActions';
import css from './DiaryPage.module.scss';

class DiaryPage extends Component {
  state = {
    date: '',
    screenWidth: window.innerWidth,
  };

  componentDidMount() {
    const today = this.getCurrentDate();
    this.setState({ date: today });
    console.log(today);
    // this.props.getProducts({
    //   date: today,
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    const { date } = this.state;
    if (prevState.date !== date) {
      this.props.getProducts({
        date: date,
      });
    }
  }

  getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    dd.length === 1 ? (dd = `0${dd}`) : (dd = dd);
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return (today = `${yyyy}-${mm}-${dd}`);
  };

  changeDate = value => {
    this.setState({ date: value });
    this.props.setCurrentDay(value);
  };

  render() {
    return this.state.screenWidth < 650 ? (
      <>
      <div className={css.pageWrapper}>
        <SetDate value={this.changeDate} />
          {/* прокинуть пропсами айди дня */}
          <DiaryProductsList />
          <DiaryAddProductForm date={this.state.date} mobile={true} />
      </div>
      <RightSideBar />
      </>
    ) : (
      <div className={css.diarypageWrapper}>
        <div className={css.diaryWrapper}>
          <SetDate value={this.changeDate} />
          <DiaryAddProductForm date={this.state.date} mobile={false} />
          <DiaryProductsList />
        </div>
        <div className={css.sidebarWrapper}>
          <RightSideBar />
        </div>
      </div>
    );
  }
}

export default connect(null, { getProducts, setCurrentDay: userActions.setCurrentDay })(DiaryPage);
