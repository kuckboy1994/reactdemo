class Comment extends React.Component {
	render() {
		return(
			<div>
				<div className="comment-body">
					* {this.props.children}
				</div>
				<div className="comment-author">
					- {this.props.author}
				</div>
			</div>
		);
	}
}



class CommentList extends React.Component {
	render() {
		var commentNode = this.props.comments.map(function (comment, index) {
			return (
				<Comment key={'comment-' + index} author={comment.author}>
					{comment.body}
				</Comment>
			)
		});
		return (
			<div>
				{commentNode}
			</div>
		)
	}
}
class CommentForm extends React.Component {
	render() {
		return (
			<div>
				commentbox
			</div>
		);
	}
}

var Comments = [
	{
		author: "Kuckboy",
		body: "this is my comment"
	}
];

var other = [
	{
		author: "Kuckboy",
		body: "this is my comment"
	},{
		author: "shan chao",
		body: "cool boy"
	}
];

class CommentBox extends React.Component {
	constructor() {
		this.state = {
			Comments : []
		}
	}
	render() {
		return (
			<div className="comment-box">
				<h1>Comments</h1>
				<CommentList comments={this.state.Comments}/>
				<CommentForm/>
			</div>
		);
	}
}

box = React.render(
	<CommentBox/>,
	document.getElementById('content')
);