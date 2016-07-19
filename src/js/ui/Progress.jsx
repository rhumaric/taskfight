import React, { Component } from 'react';

export default class Progress extends Component {
  render() {
    var fought = this.props.progress;
    var total = this.props.fightlist.length;
    var percentage = Math.round(fought/total * 100);
    return (
      <div className={"tf-Progress " + this.props.className}>
        <span className="tf-ProgressValue" style={{width:  percentage + "%"}}>{fought}/{total}</span>
      </div>
    );
  }
}
