import React, {Component} from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import Linkify from 'react-linkify';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.post.log_id)
  }

  render() {
    if (this.props.post.log_id == this.props.logId) {
      return  (
        <Card className="postBox">
          <CardBody>
            <CardSubtitle className="postSubtitle">{this.props.post.log_id}</CardSubtitle>
            <CardTitle className="postTitle">{this.props.post.title}</CardTitle>
            <CardSubtitle className="postSubtitle">{this.props.post.type}</CardSubtitle>
            <Linkify>
            <CardText className="postContent">{this.props.post.content}</CardText>
            </Linkify>
          </CardBody>
        </Card>
      );
    } else {
      return (
        null
      )
    }
}



};

function mapStateToProps(state) {
 // returning an object, and passing it to Header as props.
  return {auth: state.auth}
}


export default connect(mapStateToProps)(SinglePost)
