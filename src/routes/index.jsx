import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
let route = [
	{ path: '/', component: require('pages/autoSignatureSettings/index'),title:'自动签名设置' , doctor: true},

]





const Routes = () => (
	<Router>
		<div>
			<Switch>
				{
					route.map((item, index) => {
						return (<Route key={index} exact path={item.path}
							render={props => {
									if(item.title) {
										document.title = item.title
									}
								return <Route path={item.path} component={item.component.default}></Route>
							}}
						/>)
					})
				}
				<Redirect to='/home' from='/'></Redirect>
			</Switch>
		</div>
	</Router>
)
export default Routes;
