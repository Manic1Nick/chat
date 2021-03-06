import React, { Component } from 'react'
import { connect } from 'react-redux'

class PeopleList extends Component {
	render() {
		const { people } = this.props;

		return(
			<div class="people-list" id="people-list">
				<div class="search">
					<input type="text" placeholder="search" />
					<i class="fa fa-search"></i>
				</div>
				<ul class="list">
					{
						people.map((user, idx) => {
							return (
								<li key={idx} class="clearfix">
									<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
									<div class="about">
										<div class="name">{ user }</div>
										<div class="status">
											<i class="fa fa-circle online"></i> online
										</div>
									</div>
								</li>								
							)
						})
					}

					{/*<li class="clearfix">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
						<div class="about">
							<div class="name">Vincent Porter</div>
							<div class="status">
								<i class="fa fa-circle online"></i> online
							</div>
						</div>
					</li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Aiden Chavez</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle offline"></i> left 7 mins ago
			          	  	</div>
			          	</div>
			        </li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Mike Thomas</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle online"></i> online
			          	  	</div>
			          	</div>
			        </li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Erica Hughes</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle online"></i> online
			          	  	</div>
			          	</div>
			        </li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Ginger Johnston</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle online"></i> online
			          	  	</div>
			          	</div>
			        </li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Tracy Carpenter</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle offline"></i> left 30 mins ago
			          	  	</div>
			          	</div>
			        </li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Christian Kelly</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle offline"></i> left 10 hours ago
			          	  	</div>
			          	</div>
			        </li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Monica Ward</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle online"></i> online
			          	  	</div>
			          	</div>
			        </li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Dean Henry</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle offline"></i> offline since Oct 28
			          	  	</div>
			          	</div>
			        </li>
			        
			        <li class="clearfix">
			          	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg" alt="avatar" />
			          	<div class="about">
			          	  	<div class="name">Peyton Mckinney</div>
			          	  	<div class="status">
			          	  	  	<i class="fa fa-circle online"></i> online
			          	  	</div>
			          	</div>
			        </li>*/}
			    </ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		people: state.peopleReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)