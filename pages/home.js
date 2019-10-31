import React from "react";
import demoAction from "../redux/demo/demoAction";
import { connect } from "react-redux";
import Link from "next/link";
import { Button, DatePicker, Select } from "antd";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;
import "../assets/styles/home.scss";

@connect(
  demoReducer => ({ demoReducer }),
  {
    sayHi: demoAction.sayHi
  }
)
class Home extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;
  }
  componentDidMount() {
    this.props.sayHi("zhangwei");
  }
  clickBtn = () => {};
  render() {
    const { demoReducer } = this.props;
    return (
      <div className="home-container">
        <div className="content">
          <Link href="/">
            <a>回到首页</a>
          </Link>
          <Button type="primary">按钮</Button>
          <DatePicker />
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
      </div>
    );
  }
}

export default Home;
