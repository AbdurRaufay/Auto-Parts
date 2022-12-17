import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Register from "./components/Register"
import Login from "./components/Login"
const App = () => {
	return (
		<>
			<Router>
				{/* {window.location.pathname !== "/loginRegister" ? (
					<Header />
				) : null}{" "} */}
				<Routes>
					<Route path ="/register" element={<Register/>}/>
					<Route path ="/login" element={<Login/>}/>
				</Routes>
				{/* <Footer /> */}
			</Router>
		</>
	);
};

export default App;












// import React, { Component } from "react";
// import axios from "axios";

// export default class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			keyword: "",
// 			images: [],
// 		};
// 		this.chandleSubmit = this.chandleSubmit.bind(this);
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	async chandleSubmit(e) {
// 		e.preventDefault();
// 		const key = "KUTywaft1TIQqC2he0jDngQ2BQTdj4IQtTVbB6bgoFY";
// 		const keyword = this.state.keyword;

// 		const url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${key}`;
// 		const searchValue = await axios.get(url);

// 		this.setState({
// 			images: searchValue.data.results,
// 		});
// 	}
// 	handleChange(e) {
// 		this.setState({
// 			keyword: e.target.value,
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<form onSubmit={this.chandleSubmit}>
// 					<input
// 						type="text"
// 						value={this.state.keyword}
// 						name="search"
// 						id="search"
// 						onChange={this.handleChange}
// 					/>
// 					<button type="submit" id="searchBtn">
// 						Search
// 					</button>
// 				</form>
// 				<div>
// 					{this.state.images.map((image) => {
// 						return (
// 							<img
// 								id={image.id}
// 								src={image.urls.small}
// 								style={{
// 									width: "200px",
// 									height: "200px",
// 								}}
// 							/>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		);
// 	}
// }

// import {useState,useEffect} from 'react'
// import axios from "axios";
// const App = () => {
// 	const [images, setImages] = useState([]);
// 	const [keyword, setKeyword] = useState("");
// 	const handleChange = (e) => {
// 		setKeyword(e.target.value);
// 	}
// 	useEffect(()=>{
//    handleSubmit()
// 	},[keyword,images])
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const key = "KUTywaft1TIQqC2he0jDngQ2BQTdj4IQtTVbB6bgoFY";
// 		const keyword = this.state.keyword;
// 		const url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${key}`;
// 			const searchValue=await axios.get(url)
// 			setImages({
// 				images:searchValue.data.results
// 		})
// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<input onChange={handleChange} value={keyword}/>
// 				<button type='submit'>Submit</button>
// 			</form>
// 			<div>{images.map((image)=>{
// 				return <img  src={image.urls.small}/>

// 			})}</div>
// 		</div>
// 	)
// 		}
// export default App
// import { useMemo, useState } from "react";

// const App = () => {
// 	const [count, setCount] = useState(0);
// 	const [todos, setTodos] = useState([]);
// 	const calculation = expensiveCalulation(count);

// 	const addTodo = () => {
// 		setTodos((t) => [...t, "New Todo"]);
// 	};

// 	return (
// 		<div>
// 			<h1>{calculation}</h1>
// 			<button onClick={() => setCount(count + 1)}>Add</button>
// 			<button onClick={addTodo}>Add Todo</button>
// 			<p>{count}</p>
// 			<ul>
// 				{todos.map((todo, index) => {
// 					return <li key={index}>{todo}</li>;
// 				})}
// 			</ul>
// 		</div>
// 	);
// };
// const expensiveCalulation = (num) => {
// 	console.log("expensiveCalulation");
// 	for (let i = 0; i < 100000000; i++) {
// 		num += 1;
// 	}
// 	return num;
// };
// export default App;

// import { Component } from "react";
// // import Forms from "./Forms";
// export default class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			options: [],
// 			item: "",
// 		};
// 	}

// 	addOption = (e) => {
// 		e.preventDefault();
// 		const option = e.target.elements.option.value;
// 		this.setState((prevState) => {
// 			return {
// 				options: prevState.options.concat(option),
// 			};
// 		});
// 	};
// 	searchValue = () => {
// 		this.setState({
// 			options: this.state.options.filter((val) => {
// 				if ((this.term = "")) {
// 					return val;
// 				} else if (
// 					val
// 						.toLowerCase()
// 						.includes(this.term.toLowerCase())
// 				) {
// 					return val;
// 				}
// 			}),
// 		});
// 	};

// 	handleChange = (e) => {
// 		this.setState({
// 			item: e.target.value,
// 		});
// 	};
// 	resetFun = () => {
// 		this.setState({
// 			options: [],
// 		});
// 	};
// 	removeOne = (option) => {
// 		this.setState((prevState) => {
// 			return {
// 				options: prevState.options.filter(
// 					(item) => item !== option
// 				),
// 			};
// 		});
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<form onSubmit={this.addOption}>
// 					<input
// 						type="text"
// 						name="option"
// 						onChange={this.handleChange}
// 					/>
// 					<button type="submit">Add</button>
// 				</form>
// 				<ol>
// 					{this.state.options.map((option, i) => {
// 						return (
// 							<li key={i}>
// 								{option}
// 								<button
// 									className="btn btn-danger btn-sm"
// 									onClick={() =>
// 										this.removeOne(option)
// 									}
// 								>
// 									Delete
// 								</button>
// 							</li>
// 						);
// 					})}
// 				</ol>
// 			</div>
// 		);
// 	}
// }
