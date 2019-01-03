import * as React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Home } from '#scenes/Home'
import { StateTree } from '#state'
import {
	Alignment,
	Button,
	Classes,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Switch as _Switch
} from '@blueprintjs/core'

import './App.css'

const selector = stateTree => {
	console.log({ stateTree })
	return {
		$auth: stateTree.state.auth
	}
}

const Nav = props => {
	return (
		<Navbar>
			<NavbarGroup align={props.alignRight ? Alignment.RIGHT : Alignment.LEFT}>
				<NavbarHeading>ECHO</NavbarHeading>
				<NavbarDivider />
			</NavbarGroup>
			<NavbarGroup align={Alignment.RIGHT}>
				<Button className={Classes.MINIMAL} icon="home" text="Home" />
				<Button className={Classes.MINIMAL} icon="help" text="Info" />
				<Button className={Classes.MINIMAL} icon="locate" text="Goals" />
				<NavbarDivider />
				<Button
					className={Classes.MINIMAL}
					icon="document"
					text="Application"
					intent="primary"
				/>
			</NavbarGroup>
		</Navbar>
	)
}

export class App extends React.Component {
	render() {
		return (
			<Provider state={StateTree}>
				<div styleName="App">
					<Nav />
					<Routing />
				</div>
			</Provider>
		)
	}
}

const Routing = inject(selector)(
	observer(props => {
		return (
			<Router>
				<>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</>
			</Router>
		)
	})
)
