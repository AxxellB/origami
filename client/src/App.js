import { Component } from 'react';

import * as postService from './services/postService';

import style from './App.module.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'


// function App() {
//     return (
//         <div className={style.app}>
//             <Header />
//             <div className={style.container}>
//                 <Aside />
//                 <Main />
//             </div>
//         </div>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        postService.getAll()
            .then(posts => {
                this.setState({posts})
        });
    }

    render() {
        return (
            <div className={style.app}>
                <Header />
                <div className={style.container}>
                    <Aside />
                    <Main posts={this.state.posts} />
                </div>
                <Footer />
            </div>
        )
    }


}

export default App;
